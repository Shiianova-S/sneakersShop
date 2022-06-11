const router = require('express').Router();
const { body } = require('express-validator');
const userConroller = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post(
  '/signup',
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),

  userConroller.register,
);

router.post('/signin', userConroller.login);
router.post('/order', userConroller.sendToAdmin);
router.get('/logout', userConroller.logout); // поменял запрос на get
// активация аккаунта по ссылке
router.get('/activate/:link', userConroller.activate);
// перезаписывать фксесс токен когда токен помрет
router.get('/refresh', userConroller.refresh);
router.get('/users', authMiddleware, userConroller.getUsers);

module.exports = router;
