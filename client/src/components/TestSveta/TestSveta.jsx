import React, { useEffect } from 'react';
import { Container,  Box, Button, Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../ProductList/ProductList';
import SendOrder from './Btn.SendOrder';


const theme = createTheme();

const useStyles = makeStyles({
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  }
});

function TestSveta(props) {

  const [dialogOpen, setDialogOpen] = React.useState(true);
  const { User } = useSelector(state => state.usersReducer)
  console.log('user', User);
  const dialogClick = () => {
    setDialogOpen(Boolean(User));
  }
  const dialogClickClose = () => {
    setDialogOpen(false);
  }
  const classes = useStyles();


  return (
    <>
    {/* <ProductList /> */}
    <Container sx={{mt: '1rem'}}
            style={{paddingTop: '1.5rem'}}>

    <Box mr={3}>
    <Dialog style={{align:"center"}} open={dialogOpen} onClose={dialogClickClose} >
        <DialogContent  align="center">
          <DialogTitle>
           Чтобы сделать заказ,
        <br />
        автоизируйтесь или зарегистрируйтесь
          </DialogTitle>
      <DialogContentText style={{maxWidth: '80%'}} maxWidth="xs">
       
        <Button style={{marginTop: '30px'}} onClick={dialogClick}  color="inherit" variant="outlined">Войти или создать аккаунт</Button>
      </DialogContentText>
        </DialogContent>
     </Dialog>
    </Box>
   </Container>
   <SendOrder />
</>
  );
}

export default TestSveta;
