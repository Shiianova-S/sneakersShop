import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import CartItems from "../CartItems/CartItems";
import { Typography} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { info, error } from "../Toast/Toast";


export default function Cart() {

  const navigate = useNavigate();

  const { cartProducts } = useSelector(state => state.cartReducer);
  const { products } = useSelector(state => state.productsReducer);

  const countProduct = cartProducts.map(product => product.numberOfItems).reduce((a, b) => a + b, 0);


  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  const [state, setState] = React.useState({right: false});
  const { user } = useSelector(state => state.usersReducer)
  console.log(user, 'ИЗАКТИВАТЕД');

  const toggleDrawer = (anchor, open) => (event) => {
    if(event
      && event.target.textContent === 'Оформить заказ'
      && Boolean(user.isActivated)) {
        info('Вы перенаправлены в личный кабинет')
        setState({ ...state, [anchor]: open });
        return navigate('/profile');

      } else if (event
        && event.target.textContent === 'Оформить заказ'
        && !Boolean(user.isActivated)) {
          error('К сожалению, мы Вас не нашли в системе')
          setState({ ...state, [anchor]: open });
          return navigate('/signin');

        }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: '500px' }}
      role="presentation"
    >
       <List sx={{width: '500px'}}>
                  <Button 
                  style={{display: 'flex', justifyContent: 'end'}}
                    onClick={toggleDrawer(anchor, false)}
                    color = "inherit" >
                    <ArrowBackIosIcon/>
                     </Button>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Корзина" />
                </ListItem>
                <Divider />

                {!cartProducts.length ? (
                    <ListItem>Корзина пуста!</ListItem>
                ) : (
                    <>
                    {cartProducts.map((orders) => {
                      if (orders.numberOfItems) {
                        return <CartItems key={uuidv4()} 
                        orders={orders}/>
                      }})}

                    <Divider />
                    <ListItem>
                        <Typography sx={{fontWeight: 700, fontSize: '20px'}}>
                            Общая стоимость:{' '}
                            {cartProducts.reduce((acc, item) => {
                            let sum = products.find(el => el.id === item.product);
                            let tot = (sum?.price || 0) * item.numberOfItems
                            return acc + tot;
                            }, 0)}{' '}
                            рублей.
                        </Typography>
                    </ListItem>
                    <Button 
                    onClick={toggleDrawer(anchor, false)}
                    color = "inherit"
                    style={{margin: '50px 150px'}}
                    variant="outlined" >
                     Оформить заказ
                     </Button>
                    </>
                )}
            </List>

    </Box>
  );

   // переместить на страницу корзины потом
 // пока юзер не зарег - данные проверяются в локал и отправ в стейт,
 // как только зарег - данные в БД
  // useEffect(() => {
  //   if (currentUser.id) {
  //     fetch(`http://localhost:5000/cart/${currentUser.id}`)
  //     .then(data => data.json())
  //     .then(data => {
  //       if(data.message === 'sucsess') {
  //         dispatch(initProductCartAC(data.userOrders))
  //       } else if (data.message === 'noOrders') {
  //         console.log('noOrders');
  //       } else (console.log(data.error))})
  //     .catch(error => error.message)
  //   } 
  // }, [cartProducts, currentUser.id, dispatch]);
  if (!user) return <></>;
  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
          <IconButton aria-label="cart">
                <StyledBadge badgeContent={countProduct} color="primary">
                  <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}

    </div>
  );
}
