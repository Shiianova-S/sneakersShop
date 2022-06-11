import React from 'react';
import { Typography, BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import {makeStyles, ThemeProvider}  from '@mui/styles';
// import {  LocalActivity } from '@mui/icons-material/'
// import CallIcon from '@mui/icons-material/Call';
// import EmailIcon from '@mui/icons-material/Email';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import ConnectionForm from '../ConnectionForm/ConnectionForm';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TelegramIcon from '@mui/icons-material/Telegram';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContactNav from '../ContactNav/ContactNav';
import SuccessAlertMessage from '../AlertMessage/SuccessAlertMessage';
import ErrorAlertMessage from '../AlertMessage/ErrorAlertMessage';
import InfoAlertMessage from '../AlertMessage/InfoAlertMessage';

const useStyles = makeStyles({
  root: {
    borderRadius: 2,
    color: 'white',
  },
});



function Footer(props) {

  const classes = useStyles();

  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <>
    <ContactNav/>
    {/* <SuccessAlertMessage/>
    <ErrorAlertMessage/>
    <InfoAlertMessage/> */}
    <div  style={{ width: '100%',marginTop: '20px', paddingBottom: '2%',paddingTop: '50px' , backgroundColor: "rgba(219, 219, 219, 0.91)", paddingLeft: "50px", display: "flex", flexDirection: "column"}}>
      <ConnectionForm/>
      <footer>
                <hr style={{marginTop: "50px",}} />
        <Box 
              sx={{
                // width: "auto",
                maxWidth: "1000px",
                // height: "auto",
                margin: "auto",
                paddingTop: "20px"
                // bgcolor: 'primary.dark',
                // '&:hover': {
                //   backgroundColor: 'primary.main',
                //   opacity: [0.9, 0.8, 0.7],
                // },
              }}
        >
        <Typography  align="left" color="textSecondary">
        Любое использование либо копирование материалов или подборки материалов сайта, элементов дизайна и оформления допускается лишь с разрешения правообладателя и только со ссылкой на источник: tapkomania23.ru . 
        <br />
        <br />
        Юридическая информация: ИП Кудрявцева Ирина Станиславовна ОГРНИП 304230925900039 ИНН 230900021505
        </Typography>
        <br />
        <Typography align="center" color="textSecondary">
        © SneakersMania 2022 Все права защищены.
        </Typography>
        </Box>
      </footer>
    </div>
    </>
  );
}

export default Footer;
