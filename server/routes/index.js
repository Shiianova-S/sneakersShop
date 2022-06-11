const router = require('express').Router();
const profileRouter = require('./profile.route');
const userRouter = require('./users.route');
// const checkUserRouter = require('./checkUser.route');

router.use('/', userRouter);
router.use('/', profileRouter);
// router.use('/', checkUserRouter);

module.exports = router;
