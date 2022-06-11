const { Product } = require('../db/models');

const getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const currentProduct = await Product.findOne({
      where: { id },
      include: 'SizesOfProducts',
    });
    return res.json({ message: 'sucsess', currentProduct });
  } catch (error) {
    return res.json({ message: 'error', error: error.message });
  }
};

const editProduct = async (req, res) => {
  console.log(req.body);
  try {
    const { id } = req.params;
    const neededProduct = await Product.findOne({
      where: { id },
    });

    const body = {
      name: req.body.name,
      gender: req.body.gender,
      // photo: req.file,
      description: req.body.description,
      price: req.body.price,
    };

    const changedProduct = await neededProduct.update(body);
    res.json({
      message: 'vse norm',
      changedProduct,
    });
  } catch (error) {
    res.json({ error: error.message });
    console.log(error);
  }
};

module.exports = {
  getOneProduct,
  editProduct,
};
