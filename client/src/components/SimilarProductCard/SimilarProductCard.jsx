import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Card, CardActions, CardContent, Grid, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@mui/styles"
import './SimilarProduct.css'

const useStyles = makeStyles({
  photoSize: {
    maxHeight: '200px',
    width: '150px',
    margin: '7px',
  },
});

export default function SimilarProductCard({product}) {

  const classes = useStyles();

  return (

    <Grid item xs={10} md={10}>
    <Link className="noDecoration"to={`/products/${product.id}`}>
    <Card className={classes.photoSize} >
        <CardMedia
            image={product.photo}
            component="img"
            alt={product.name}
            title={product.name}
            style={{ height: '15vh' }}
        />
        <CardContent style={{fontSize: '14px', paddingTop: '2px', paddingBottom: '2px'}}>
            <Typography
                component="h6"
            >
                {product.name}
            </Typography>
            <Typography variant="body6">Цена: {product.price} руб.</Typography>
        </CardContent>
        <CardActions>
            <Button
                variant="text"
                // onClick={() =>
                //     setOrder({
                //         id: product.id,
                //         name: product.name,
                //         price: product.price,
                //     })
                // }
            >
                В избранное
            </Button>
        </CardActions>
    </Card>
    </Link>
</Grid>
  );
}
