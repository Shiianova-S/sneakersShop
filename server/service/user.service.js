const bcrypt = require('bcrypt');
const uuid = require('uuid');
const { all } = require('sequelize/dist/lib/operators');
const { User } = require('../db/models');
const mailService = require('./mail.service');
const tokenService = require('./token.service');
const UserDto = require('../dtos/user.dto');
const ApiError = require('../exceptions/api.errors');

class UserService {
  async register(email, password, role) {
    // проверяем наличие юзера
    const candidate = await User.findOne({
      where: {
        email,
      },
    });
    //  наличие юзера - ошибка
    if (candidate) {
      throw ApiError.BadRequest(`Пользователь с ${email} почтой уже существует`);
    }
    // хэшируем пароль
    const hashPass = await bcrypt.hash(password, 5);
    // делаем ссылку для активации аккаунта
    const activationLink = uuid.v4();
    // сохраняем в базу юзера
    const newUser = await User.create({
      email,
      password: hashPass,
      role: 'user',
      activationLink,
    });
    // отправляем юзеру на почту письмо с активацией
    await mailService.sendActivationMail(email, `${process.env.API_URL}/activate/${activationLink}`);

    // формируем  data transfer object
    // eslint-disable-next-line max-len
    const userDto = new UserDto(newUser); // внутри id, email, isActivated, они в payload новых токенов

    // генерируем токены
    const tokens = tokenService.generateTokens({ ...userDto });

    // сохраняем рефреш токены в бд
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async sendToAdmin(name, address, phone) {
    // const candidate = await User.findOne({
    //   where: {
    //     email,
    //   },
    // });
    // const newUser = await User.create({
    //   email,
    //   password: hashPass,
    //   role,
    //   activationLink,
    // });
    // отправляем юзеру на почту письмо с активацией
    await mailService.emailToAdmin(name, address, phone);

    return {
      message: 'Успешное письмо',
    };
  }

  // активация по ссылке
  async activate(activationLink) {
    // ищем пользователя по ссылке
    const user = await User.findOne({
      where: {
        activationLink,
      },
    });

    // проверка пользователя в базе
    if (!user) {
      throw ApiError.BadRequest('Неккоректная ссылка активации');
    }
    // обноваляем статус ссылки с почты
    await User.update(
      { isActivated: true },
      {
        where: {
          activationLink,
        },
      },
    );

    const userWithFlag = await User.findOne({
      where: {
        activationLink,
      },
    });
    const userDto = new UserDto(userWithFlag);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }

  // функция логина
  async login(email, password) {
    // ищем пользователя в базе
    const user = await User.findOne({
      where: {
        email,
      },
    });
    // если нет, то  ошибка
    if (!user) {
      throw ApiError.BadRequest('Пользователь не найден');
    }
    // проверка паролей с бд
    // 1ый - пришедший, второй - с бд
    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      throw ApiError.BadRequest('Пароли не совпадают');
    }
    // генерируем новую dto
    const userDto = new UserDto(user);
    // генерируем пару токенов
    const tokens = tokenService.generateTokens({ ...userDto });
    // сохраняем рефреш токены в бд
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }

  async logout(refreshToken) {
    // удаляем токен
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    // проверяем токен
    if (!refreshToken) {
      throw ApiError.UnaurhorizedError();
    }
    // валидируем (проверяем) токен
    const userData = tokenService.validateRefreshToken(refreshToken);
    // отправляем токен в функцию, которая найдет его в бд
    const tokenFromDB = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDB) {
      throw ApiError.UnaurhorizedError();
    }

    const currentUser = await User.findOne({
      where: {
        id: userData.id,
      },
    });
    // генерируем новую dto
    const userDto = new UserDto(currentUser);
    // генерируем пару токенов
    const tokens = tokenService.generateTokens({ ...userDto });
    // сохраняем рефреш токены в бд
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }

  async getAllUsers() {
    const allUsers = await User.findAll();
    return allUsers;
  }
}

module.exports = new UserService();
