
import React from 'react';
import { Paper, Container, FormControl, Typography, Box, Grid, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import {makeStyles, ThemeProvider}  from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import slide1 from "./sneakers.jpeg"
import ConnectionForm from '../ConnectionForm/ConnectionForm';
import EmailIcon from '@mui/icons-material/Email';

const ariaLabel = { 'aria-label': 'description' };
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
    paddingBottom: theme.spacing(9),
    paddingLeft: theme.spacing(9),
    marginTop: theme.spacing(12),
    color: 'white',
  }
});



function Info(props) {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.mainFeaturesPost} style={{backgroundImage: `url(${slide1})`, marginTop: '62px'}}>
      <Container maxWidth="md">
        <div className={classes.overlay}/>
        <Grid container>
          <Grid item md={6}>
  
            <div style={{marginLeft: "50px"}} className={classes.mainFeaturesPostContent}>
              {/* <Typography component="h1" color="black" variant="h2" gutterBottom>
                Tapcomania
              </Typography> */}
              <Typography component="h5"variant="h4" color="black" paragraph>
              Оптово-розничная продажа обуви
                           по всей России !
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
     </Paper>
    <main>
     <div>
        <Container style={{marginTop: '50px'}} maxWidth="lg">
        <Box>
        <Typography variant='h6' align="left" color="textPrimary" paragraph>
        Уважаемые любители качественной обуви!
        <br />
        <br />
        Мы всегда ждём Вас в нашем магазине по адресу: 
        <br />
        г. Краснодар, улица Вишняковой 144, Т.Ц. Гранд Паркинг №2, магазин № 13.
      <br />
      <br />
      Всем гостям дарим теплый прием и скидку 10% от цен на сайте.
          </Typography >
        </Box>
<Box style={{display: 'flex', flexDirection: 'row', marginTop: '30px', marginBottom: '50px'}}>
          <YMaps>
  <Map
    style={{width:'630px', height:'360px', marginRight: '40px'}}
    defaultState={{
      center: [45.021155, 38.999504],
      zoom: 16,
      controls: ['zoomControl', 'fullscreenControl'],
    }}
    modules={['control.ZoomControl', 'control.FullscreenControl']}
  >
    <Placemark
      modules={['geoObject.addon.balloon']}
      defaultGeometry={[45.021155, 38.999504]}
      properties={{
        balloonContentBody:
          'This is balloon loaded by the Yandex.Maps API module system',
      }}
    />
  </Map>
</YMaps>
<Typography variant='h5' style={{marginTop: '60px'}} align="left" color="textPrimary" gutterBottom>
          Наши контакты
          <br />
          <br />
          8-918-323-33-03 Дмитрий
          <br />
          <br />
          8-918-33-93-769 Сергей - оптовые продажи 
          <br />
          <br />
          <EmailIcon size={'lg'} style={{paddingRight: '10px'}}/>
          SneakersMania@yandex.ru
          </Typography>
</Box>
{/* <Typography variant='h5' style={{marginTop: '60px'}} align="center" color="textSecondary" gutterBottom>
            Наши контакты:
          </Typography> */}
            {/* <hr style={{width:'70%', marginTop: '60px'}} /> */}
          {/* <Typography variant='h5' style={{marginTop: '60px'}} align="center" color="textSecondary" gutterBottom>
          Наши торговые марки:
          </Typography> */}
          {/* <div style={{marginTop: '10px', marginBottom: '50px', maxWidth: "50px"}}>
            <img src={brands} alt="" />
          </div> */}
          {/* <Typography variant='h6' align="center" color="textPrimary">
          Sahab & Gambol & Cania (Thailand)
          </Typography> */}
          {/* <Typography variant='h6' align="center" color="textSecondary" paragraph>
Обувь этих марок обладает отличными характеристиками и незаменима для повседневного использования, как в поездке на курорт, так и в городской среде, и даже в качестве домашних тапочек. Высококачественные материалы с высоким содержанием натурального каучука придают этой обуви оптимальную эластичность и прочность. Продукция славится среди потребителей тем, что носится по несколько сезонов, не боится воды, хорошо подходят для пляжа, бассейна, дома и повседневной эксплуатации, оставаясь при этом удобной и красивой.
Новинки коллекции Sahab & Gambol & Cania 2021 порадуют Вас яркими и стильными моделями, а ассортимент приятно удивит.
Теперь Вы можете заказать обувь Сахаб, Гэмбол или Кания оптом и в                                      розницу от надежного поставщика на Юге России !
      Приятных покупок !
          </Typography> */}
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

export default Info;
