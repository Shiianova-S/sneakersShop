import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { addProductCartAC }  from '../../redux/actionCreators/cartAC';
import ChooseSize from '../ChooseSize/ChooseSize';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import {Button, ButtonGroup, Card, CardActions, CardContent, Container, CardMedia, Typography } from "@material-ui/core";
import { initCurrentProductCardAC } from '../../redux/actionCreators/productsAC'
import './ProductCurrentCard.css'
import { useNavigate } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import ProductList from '../ProductList/ProductList';
import { updateProductInStokAC } from '../../redux/actionCreators/productsAC';
import {Box, Dialog, DialogContent, DialogContentText } from '@mui/material'
import SimilarProducts from '../SimilarProducts/SimilarProducts';
import { info } from '../Toast/Toast';



function ProductCurrentCard() {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const params = useParams();
  const { currentProduct } = useSelector(state => state.productsReducer);
  const { cartProducts } = useSelector(state => state.cartReducer);

  const {currentUser} = useSelector(state => state.usersReducer);

  const [needSize, setSize] = useState();
  const countAll = currentProduct.SizesOfProducts?.map(el => el.itemsLeft).reduce((a, b) => a + b);


  const addProductBacket = () => {
    if (currentUser?.id) {
      info('Товар добавлен в корзину')
      fetch(`/cart/${currentUser.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({currentProduct, needSize}),
        credentials: 'include',
      })
      .then(data => data.json())
      .then(data => {
        if(data.message === 'sucsess') {
          dispatch(addProductCartAC(data.userOrders))
        } else if (data.message === 'noOrders') {
          // console.log('noOrders');
        } else (console.log(data.error))})
      .catch(error => error.message)
    } else {
      if(!needSize) { 
        return info('Уточните размер')}
      const newOrder = { product: currentProduct.id, size: needSize, numberOfItems: 1 };
      dispatch(addProductCartAC(newOrder));
      dispatch(updateProductInStokAC(needSize))

      }

  }
   
  useEffect(() => {
    const id = Number(params.id);
    fetch(`/products/${id}`, {
      credentials: 'include',
    })
    .then(data => data.json())
    .then(data => {
      if(data.message === 'sucsess') {
        dispatch(initCurrentProductCardAC(data.currentProduct))
      } else if (data.message === 'noCurrent') {
        console.log('noCurrent');
      } else (console.log(data.error))})
    .catch(error => error.message)
}, [dispatch, params.id]);

const [dialogOpen, setDialogOpen] = React.useState(true);
const { User } = useSelector(state => state.usersReducer)

const dialogClick = () => {
  setDialogOpen(Boolean(User));
}
const dialogClickClose = () => {
  setDialogOpen(false);
  navigate(-1);
}
const dialogClickOk =() => {
  setDialogOpen(Boolean(User));
  navigate(-1)
}


  return (
    <>
    <ProductList />

    <Container sx={{mt: '1rem'}}
            style={{paddingTop: '1.5rem'}}>

    <Box mr={3}>
    <Dialog style={{align:"center"}} open={dialogOpen} onClose={dialogClickClose}>
        <DialogContent  align="center">



        <Container 
            style={{padding: '1rem'}}
        >
    <Card 
    style={{ height: '85%' }}
    className="motion"
    >
        <CardMedia
            image={currentProduct.photo}
            component="img"
            alt={currentProduct.name}
            title={currentProduct.name}
            style={{ height: '38vh' }}
        />
        <CardContent>
          <div className="content">
            <div>
            <Typography
                variant="body2"
                component="h3"
            >
                {currentProduct.name}
            </Typography>
            <Typography variant="body2">Цена: {currentProduct.price} руб.</Typography>
            </div>
            <div>
            <Typography variant="body1">Описание: {currentProduct.description}</Typography>

            {/* {currentProduct.rating ? <Typography variant="body3">Рейтинг: {currentProduct.rating}</Typography> */}
            {/* <Typography>Рейтинг:</Typography>
            {currentProduct.rating ?  
             <Rating name="read-only" value={currentProduct.rating} readOnly />
              : <Typography variant="h6">Пока что никто не оставил отзыв на данный товар</Typography>} */}
            </div>
              <div>
            <Typography variant="h6">Размеры в наличии:</Typography>
            <br/>
            <ButtonGroup exclusive='true'>
            {(currentProduct.SizesOfProducts?.length && countAll)
             ? currentProduct.SizesOfProducts?.map(el => {
              return <ChooseSize key={uuidv4()} setSize={setSize} size={el.sizeNumber} count={el.itemsLeft}/>
             }) : <Typography variant="h6">Данный товар закончился</Typography>
             }
             </ButtonGroup>
             </div>
             </div>
        </CardContent>
        <CardActions>
            <Button variant="outlined" onClick={addProductBacket}>
                В корзину
            </Button>
        </CardActions>
    </Card>
    <SimilarProducts />
</Container>



      <DialogContentText style={{maxWidth: '80%'}} maxWidth="xs">
        <Button style={{marginTop: '30px'}} onClick={dialogClickOk} color="inherit" variant="outlined">Назад</Button>
      </DialogContentText>
        </DialogContent>
     </Dialog>
    </Box>
   </Container>


</>

  );
}

export default ProductCurrentCard;


