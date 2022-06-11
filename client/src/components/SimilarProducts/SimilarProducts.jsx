import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { initProductsListAC } from '../../redux/actionCreators/productsAC'
import { Grid} from '@material-ui/core';
import SimilarProductCard from '../SimilarProductCard/SimilarProductCard';

function SimilarProducts(props) {

  const dispatch = useDispatch();
  const { products } = useSelector(state => state.productsReducer);
  const { currentProduct } = useSelector(state => state.productsReducer);

  useEffect(() => {
    fetch('/products', {
      credentials: 'include',
    })
    .then(data => data.json())
    .then(data => {
      if(data.message === 'sucsess') {
        dispatch(initProductsListAC(data.products))
      } else if (data.message === 'noproducts') {
        console.log('noproducts');
      } else (console.log(data.error))})
    .catch(error => error.message)
  }, [dispatch]);

  return (
    <div className="">
      <h3>Также рекомендуем</h3>
      <Grid container
            direction="row"
            justifyContent="flex-start"
            style={{width: '100%'}}
            alignItems="flex-start">
        {products
        .filter(product => product.gender === currentProduct.gender
             && product.id !== currentProduct.id)
        .map( product =>
              <Link to={`/products/${product.id}`}>
              <SimilarProductCard key={product.id} product={product}/>
              </Link>
            ).slice(0,3)}
      </Grid>
      </div>
  );
}

export default SimilarProducts;
