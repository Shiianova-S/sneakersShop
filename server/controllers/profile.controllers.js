const userService = require("../service/profile.user");

async function getUser(req, res) {
  try {
    const { id: userId } = req.params;
    const user = await userService.getUserById(userId);
    res.status(200).json({
      user,
      message: "найденный юзер",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

async function changeUser(req, res) {
  try {
    const { id: userId } = req.params;
    await userService.updateUser(userId, req.body);
    const userData = await userService.getUserById(userId);
    res.status(200).json({
      userData,
      message: "данные юзера обновлены",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

async function getProducts(req, res) {
  try {
    const { id: userId } = req.params;
    // console.log(userId, 'userId');
    const userProducts = await userService.getUserProductService(userId);
    res.status(200).json({
      userProducts,
      message: "userProducts найдены!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  getUser,
  changeUser,
  getProducts,
};
