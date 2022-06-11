const dotenv = require('dotenv');

dotenv.config();
const express = require('express');
const path = require('path');
const config = require('./config/config');
const errorMiddleware = require('./middlewares/errors.middleware');

const app = express();
const router = require('./routes/index');
const productsRouter = require('./routes/products.router');
const commentsRouter = require('./routes/reviews.router');
const cartRouter = require('./routes/cart.router');
const addPhotoRouter = require('./routes/upload.route');
const checkUserRouter = require('./routes/checkUser.route');

const { sequelize } = require('./db/models');

const PORT = process.env.PORT ?? 5000;

config(app);
app.use(express.static(path.resolve('../client/build')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/auth', checkUserRouter);
app.use('/addProduct', addPhotoRouter);
app.use('/', router);
app.use('/products', productsRouter);
app.use('/reviews', commentsRouter);
app.use('/cart', cartRouter);

app.use(errorMiddleware);
app.get('*', (req, res) => {
  res.sendFile(path.resolve('../client/build/index.html'));
});
app.listen(PORT, async () => {
  console.log('Сервер запущен на порту', PORT);

  try {
    await sequelize.authenticate();
    console.log('Подключение к БД успешно');
  } catch {
    console.log('Не получилось подключиться к БД');
  }
});
