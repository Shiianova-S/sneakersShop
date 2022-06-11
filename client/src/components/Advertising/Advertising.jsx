import React, {useState, useEffect} from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';
import {makeStyles, ThemeProvider}  from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import slide1 from "../Info/imgFrom.jpeg"
import ContactNav from '../ContactNav/ContactNav';


const theme = createTheme();

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 2,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 35,
    padding: '0 22px',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1,
  },
  barColor: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.9)",
  },
  mainFeaturesPostContent: {
    position: "relative",
    alignItems: 'rigth',
    padding: theme.spacing(1),
    marginBottom: theme.spacing(12),
    marginTop: theme.spacing(12),
    color: 'white',
  }
});


// const img = [
//   <img alt="" key={'small'} src={''} />,
//   <img alt="" key={''} src={''} />,
//   // <img key={slide3} src={slide3} />,
//   // <img key={slide4} src={slide4} />,
//   // <img key={slide5} src={slide5} />,
// ]

function Advertising(props) {

    // Индекс текущего слайда
// const [activeIndex, setActiveIndex] = useState(0);
 
// Хук Effect
// useEffect(() => {
//     // Запускаем интервал
//     const interval = setInterval(() => {
//         // Меняем состояние
//         setActiveIndex((current) => {
//             // Вычисляем индекс следующего слайда, который должен вывестись
//             const res = current === img.length - 1 ? 0 : current + 1
//             // Возвращаем индекс
//             return res
//         })
//     }, 3000)
//     // Выключаем интервал
//     return () => clearInterval(interval)
// }, [])
 
// Вычисляем индекс предыдущего слайда
// const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
// // Вычисляем индекс следующего слайда
// const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <Paper  className={classes.mainFeaturesPost} style={{backgroundImage: `url(${slide1})`, marginTop: '62px'}}>
    <Container maxWidth="md">
      <div className={classes.overlay}/>
      <Grid container>
        <Grid item md={6}>

          <div className={classes.mainFeaturesPostContent}>
            <Typography component="h2"style={{color: 'white'}} variant="h2" gutterBottom>
            SneakersMania
            </Typography>
            <Typography component="h5"variant="h4" style={{color: 'white'}} paragraph>
                           Преимущество в Качестве
            </Typography>
            <Button size="large" href='/info' variant="outlined" color="inherit">
                О нас
              </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
   </Paper>
   </ThemeProvider>
  );
}

export default Advertising;
