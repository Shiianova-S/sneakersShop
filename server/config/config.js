const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const config = (app) => {
  // Use
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(
    cors({
      origin: ['http://localhost:3000', 'http://localhost:5000', 'https://slippe.herokuapp.com'],
      optionsSuccessStatus: 200,
      credentials: true,
    }),
  );
  app.use(helmet());
  app.use(morgan('dev'));
};

module.exports = config;
