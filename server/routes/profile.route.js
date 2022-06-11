const router = require("express").Router();
const profileController = require("../controllers/profile.controllers");

router.get("/users/:id", profileController.getUser);
router.put("/users/:id", profileController.changeUser);
router.get("/users/order/:id", profileController.getProducts);

module.exports = router;
