const router = require("express").Router();

const { Product } = require("../db/models");

router.route('/')
  .get(async (req, res) => {
    try {
      const products = await Product.findAll({
        // where: { status: 'active' },

        include: 'SizesOfProducts',
      });
      if (products.length > 0) return res.json({ message: 'sucsess', products });
      return res.json({ message: 'noproducts' });
    } catch (error) {
      return res.json({ message: 'error', error: error.message });
    }
  });

router.route('/:id')
  .get(async (req, res) => {
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
  });

router.route('/edit/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const currentProduct = await Product.findOne({
        where: { id },
        include: "SizesOfProducts",
      });
      return res.json({ message: "sucsess", currentProduct });
    } catch (error) {
      return res.json({ message: "error", error: error.message });
    }
  })

  .put(async (req, res) => {
    console.log(req.body);

    const { id } = req.params;

    const { name, price, photo, gender, description } = req.body.updatedProduct;

    const neededProduct = await Product.findOne({
      where: { id },
    });

    try {
      const updatedProduct = await neededProduct.update({
        name,
        price,
        photo: `http://localhost:5000/images/${photo.slice(12)}`,
        gender,
        description,
      });

      const { sizes } = req.body;

      sizes.forEach(async (el) => {
        await SizesOfProduct.update(
          { itemsLeft: Number(Object.values(el)[0]) },
          {
            where: {
              productId: updatedProduct.dataValues.id,
              sizeNumber: Number(Object.keys(el)[0]),
            },
          }
        );
      });

      res.status(201).json({ m: "ok" });
    } catch (error) {
      res.json({ error: error.message });
      console.log(error);
    }
  });

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const currentProduct = await Product.findOne({
        where: {
          id,
          status: "active",
        },
        include: "SizesOfProducts",
      });
      return res.json({ message: "sucsess", currentProduct });
    } catch (error) {
      return res.json({ message: "error", error: error.message });
    }
  })
  .put(async (req, res) => {
    const { id } = req.params;

    const neededProduct = await Product.findOne({
      where: { id },
    });

    try {
      if (neededProduct.status === "active") {
        await neededProduct.update({
          status: "deleted",
        });
      } else {
        await neededProduct.update({
          status: "active",
        });
      }
      res.status(201).json(neededProduct);
    } catch (error) {
      res.json({ error: error.message });
      console.log(error);
    }
  });
module.exports = router;
