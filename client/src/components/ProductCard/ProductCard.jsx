import { Link } from 'react-router-dom';
import './ProductCard.css';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { info } from "../Toast/Toast";
import {addFavoritProduct} from '../../redux/actionCreators/favoriteAC'
// import { addFavoritProduct} from '../../redux/actionCreators/favoriteAC'



export default function ProductCard({product}) {

  const dispatch = useDispatch()
  // const {favoriteProducts} = useSelector(state => state.favoritesReducer)

  const addFavorites = () => {
    // const favProd = {...currentFavProd}
    localStorage.setItem("favorite", product.toString());
    dispatch(addFavoritProduct({product}))
    info('Добавлено в избранное')
  }

  return (

    <Grid item xs={12} md={4}>
    <Link className="noDecoration"to={`/products/${product.id}`}>
    <Card className="motion"
        sx={{
            height: '100%',
        }}
    >
        <CardMedia
            image={product.photo}
            component="img"
            alt={product.name}
            title={product.name}
            style={{ height: '35vh' }}
        />
        <CardContent>
            <Typography
                variant="h6"
                component="h3"
            >
                {product.name}
            </Typography>
            <Typography variant="body1">Цена: {product.price} руб.</Typography>
        </CardContent>
        <CardActions>
            <Button 
            onClick={addFavorites}
                variant="text"
            >
                В избранное
            </Button>
        </CardActions>
    </Card>
    </Link>
</Grid>
  );
}
