const { User, Cart, SizesOfProduct, Product } = require("../db/models");

async function getUserById(id) {
  const user = await User.findOne({
    where: {
      id,
    },
  });
  if (!user) {
    throw new Error("запрашиваемого пользователя не существует");
  }
  return user;
}

async function updateUser(id, data) {
  const currentUser = await User.findOne({
    where: {
      id,
    },
  });
  currentUser.set(data);
  await currentUser.save();
}

async function getUserProductService(id) {
  const userProducts = await Cart.findAll({
    where: {
      userId: id,
    },
    // include: [
    //   {
    //     model: Product,
    //     include: [SizesOfProduct],
    //   },
    // ],
  });
  if (!userProducts) {
    throw new Error("id не найден");
  }
  return userProducts;
}

module.exports = {
  getUserById,
  updateUser,
  getUserProductService,
};
