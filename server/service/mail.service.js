const nodemailer = require('nodemailer');

class MailService {
  // инициализируем почтовый клиент
  // настройки почты гугл
  constructor() {
    this.transporter = nodemailer.createTransport({
      // Сервер исходящей почты (SMTP) (Доступ по протоколу IMAP)
      host: process.env.SMTP_HOST,
      // Порт для TLS/STARTTLS
      port: process.env.SMTP_PORT,
      secure: false, // поменял. было true
      auth: {
        // почта и пароль отправителя
        user: process.env.SMTP_USER_SHARE,
        pass: process.env.SMTP_USER_PASSWORD,
      },
    });
  }

  // функция отправки на почту
  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      // кто отправляет
      from: process.env.SMTP_USER_SHARE,
      // кому отправляется из переменной
      to,
      subject: `Активация аккаунта на ${process.env.API_URL}`,
      text: '...',
      html: `
        <div>
          <h1>Для активации перейдите по ссылке</h1>
          <a href="${link}">${link}</a>
        </div>
        `,
    });
  }

  async emailToAdmin(name, address, phone) {
    await this.transporter.sendMail({
      // кто отправляет
      from: process.env.SMTP_USER_SHARE,
      // кому отправляется из переменной
      to: process.env.ADMIN_EMAIL,
      subject: `Заказ от ${name}`,
      text: '...',
      html: `
        <div>
          <h1>Адрес: ${address}</h1>
          <h1>Телефон: ${phone}</h1>
        </div>
        `,
    });
  }
}

module.exports = new MailService();
