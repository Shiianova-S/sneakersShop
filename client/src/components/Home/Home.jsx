import React from 'react';
import { AppBar, Container, Toolbar, IconButton, Typography, Box, Paper, Grid, Menu, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import {makeStyles, ThemeProvider}  from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import Advertising from '../Advertising/Advertising';
import ProductList from "../ProductList/ProductList";


function Home(props) {

  return (
  <ProductList/>
  );
}

export default Home;
