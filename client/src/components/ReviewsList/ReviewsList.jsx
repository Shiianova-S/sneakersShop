import React, { useEffect } from 'react';
import { Grid, Container, Card, CardContent, Typography, CardMedia, Box, Button, TextareaAutosize, Dialog, DialogTitle, DialogContent, DialogContentText, Link } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { initRewiewsListAC } from '../../redux/actionCreators/reviewsAC';
import ReviewsCard from './ReviewsCard';
import { useNavigate } from 'react-router-dom'


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

function ReviewsList(props) {

  const { user } = useSelector((state) => state.usersReducer);

  console.log(user, 'ACTIVATED');

  const [dialogOpen, setDialogOpen] = React.useState(false);

  const dialogClickOpen = () => {
    setDialogOpen(true);
  }
  const dialogClickClose = () => {
    setDialogOpen(false);
  }
  const classes = useStyles();

  const {comment} = useSelector(state => state.reviewsReducer);

  console.log('Смотри сюда',comment);

  const dispatch = useDispatch();

  useEffect(() => {
      fetch('/reviews', {
        credentials: 'include',
      })
      .then(data => data.json())
      .then(data => {console.log('reviews!', data.comment)
      dialogClickOpen();
    return data
  })
      .then(data => {
        console.log(data);
        if(data.message === 'sucsess') {
          dispatch(initRewiewsListAC(data.comment))
        } else if (data.message === 'nopComments') {
          console.log('noComments');
        } else (console.log(data.error))})
      .catch(error => error.message)
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <>
    <Container sx={{mt: '1rem'}}
            style={{paddingTop: '1.5rem'}}>

              <div>
              <Container style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', align:"center"}}  sx={{ p: 3 }} maxWidth="sm">
                <Typography variant='h4' align="center" color="textPrimary" gutterBottom>
                  Отзывы
                </Typography>
              <Typography variant='h6' align="center" color="textSecondary" gutterBottom>
                Уважаемые покупатели, на этой страничке Вы можете оставить свой отзыв
              </Typography>
              <Typography variant='h6' align="center" color="textSecondary" gutterBottom>
                Спасибо за Ваше мнение !
              </Typography>
              {/* <Box component="span" maxWidth="sm" sx={{ p: 2 }}> */}
               {/* <Button onClick={() => {dialogClickOpen()}} variant="outlined" color="inherit">Оставить отзыв на нашем сайте</Button> */}
               <Button  variant="outlined" onClick={()=>{navigate('/addreviews')}} style={{margin: '20px 170px 0px 170px'}} color="inherit">ОСТАВИТЬ ОТЗЫВ</Button>
               <Button variant="outlined" style={{margin: '20px 170px 0px 170px'}} color="inherit">ОТЗЫВ НА ЯНДЕКС</Button>
               <Button variant="outlined" style={{margin: '20px 170px 20px 170px'}} color="inherit">ОТЗЫВ НА GOOGLE</Button>
              {/* </Box> */}
              </Container>
              </div>
              {/* <div style={width='560px',height='800px',overflow='hidden'position='relative';"}><iframe style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/226327670406?comments"></iframe>
<a href="https://yandex.ru/maps/org/usadba_izmaylovo/226327670406/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0">Усадьба Измайлово на карте Москвы — Яндекс.Карты</a>
</div> */}
                  <Box mr={3}>
    <Dialog style={{align:"center"}} open={dialogOpen} onClose={dialogClickClose}  >
        <DialogContent  align="center">
          <DialogTitle>
          Отзывы
          </DialogTitle>
      <DialogContentText style={{maxWidth: '80%'}} maxWidth="xs">
        Выполните автоизацию или регистрацию,
        <br />
        чтобы ставить оценки и писать отзывы.
        <br />
        <Button style={{marginTop: '30px'}} onClick={dialogClickClose}  color="inherit" variant="outlined">Войти или создать аккаунт</Button>
      </DialogContentText>
        </DialogContent>
        
     </Dialog>

     
    </Box>
    <Grid container spacing={2}>
    {(comment?.length)? comment.map(comment => (
              <ReviewsCard  key={comment.id} reviews={comment}/>
          )) : <></>}
   </Grid>
   </Container>
   
   </>
  );
}

export default ReviewsList;
