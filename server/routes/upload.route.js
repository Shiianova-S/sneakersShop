const router = require('express').Router();
const fileMiddleware = require('../middlewares/file.middleware');
const { Product, SizesOfProduct } = require('../db/models');

router
  .post('/photo', fileMiddleware.single('productPhoto'), async (req, res) => {
    try {
      if (req.file) {
        res.json(req.file);
      }
    } catch (e) {
      console.log(e);
    }
  })
  .post('/', async (req, res) => {
    const {
      name, price, photo, gender, description,
    } = req.body.newProduct;

    try {
      const newProduct = await Product.create({
        name,
        price,
        photo: `http://localhost:5000/images/${photo.slice(12)}`,
        gender,
        description,
        status: 'active',
      });


      const { sizes } = req.body;

      sizes.forEach(async (el) => {
        await SizesOfProduct.create({
          productId: newProduct.dataValues.id,
          sizeNumber: Number(Object.keys(el)[0]),
          itemsLeft: Number(Object.values(el)[0]),
        });
      });


      res.status(201).json({ m: 'jj' });
    } catch (error) {
      res.json({ error: error.message });
      console.log(error);
    }
  });

module.exports = router;
