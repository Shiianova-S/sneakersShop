import React from 'react';
import { AppBar, Container, Toolbar, IconButton, Typography, Box, Paper, Grid, Menu, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import {makeStyles, ThemeProvider}  from '@mui/styles';
import { createTheme } from '@mui/material/styles';


const theme = createTheme();

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 2,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
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
    padding: theme.spacing(9),
    marginTop: theme.spacing(12),
    color: 'white',
  }
});

function Wholesale(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <main>
     <div>
        <Container style={{marginTop: '150px'}} maxWidth="md">
        <Typography variant='h6' align="center" color="textSecondary" paragraph>
          
        Чтобы попасть в оптовый раздел сайта и скачать актуальный прайс, пожалуйста, запросите пароль через E-mail : tapkomania23@yandex.ru или по телефону : 8-918-123-33-03. В обращении укажите свой город, контактный телефон и электронную почту.
          </Typography >

          <div style={{display: 'flex', flexDirection: 'column', maxWidth:'25px', alignItems: 'center'}}>
          <Button size="small" variant="outlined" color="inherit">
              О нас
          </Button>
          </div>

          <Typography variant='h4' style={{marginTop: '60px'}} align="center" color="textPrimary" gutterBottom>
          Наши торговые марки:
          </Typography>
          {/* <div style={{marginTop: '10px', marginBottom: '50px', maxWidth: "50px"}}>
            <img src={brands} alt="" />
          </div> */}
          <Typography variant='h6' align="center" color="textSecondary" paragraph>
          
          Sahab  Gambol  Cania (Thailand)
      Обувь этих марок обладает отличными характеристиками и незаменима для повседневного использования, как в поездке на курорт, так и в городской среде, и даже в качестве домашних тапочек. Высококачественные материалы с высоким содержанием натурального каучука придают этой обуви оптимальную эластичность и прочность. Продукция славится среди потребителей тем, что носится по несколько сезонов, не боится воды, хорошо подходят для пляжа, бассейна, дома и повседневной эксплуатации, оставаясь при этом удобной и красивой.
      Теперь Вы можете заказать обувь Сахаб, Гэмбол или Кания оптом и в розницу от надежного поставщика на Юге России !
            Приятных покупок !
          </Typography>
          <div>
          <Grid container spacing={2} justify="center">
              <Grid>
              {/* <Button variant="outlined" color="inherit">
                О нас
              </Button> */}
              </Grid>
            </Grid>
          </div>
        </Container>
     </div>
  </main>

</ThemeProvider>
  );
}

export default Wholesale;
