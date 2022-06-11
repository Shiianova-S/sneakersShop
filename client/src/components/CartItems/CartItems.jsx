import React from "react";
import {
  CardActions,
  ListItem,
  Typography,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import {
  addProductCartAC,
  removeProductCartAC,
  deleteProductCartAC,
} from "../../redux/actionCreators/cartAC";
import {
  updateProductInStokAC,
  returnProductInStokAC,
  returnOrderCardAC,
} from "../../redux/actionCreators/productsAC";

function CartItems({ orders }) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);

  const needProduct = products.find((el) => el.id === orders.product);

  const addProduct = () => {
    dispatch(addProductCartAC(orders));
    dispatch(updateProductInStokAC(orders));
  };

  const minusProduct = () => {
    dispatch(removeProductCartAC(orders));
    dispatch(returnProductInStokAC(orders));
  };

  const removeOrder = () => {
    dispatch(deleteProductCartAC(orders));
    dispatch(returnOrderCardAC(orders));
  };

  if (!needProduct) return <></>;

  return (
    <ListItem style={{ padding: "5px" }}>
      <Link className="noDecoration" to={`/products/${needProduct.id}`}>
        <CardMedia
          image={needProduct.photo}
          component="img"
          style={{ height: "50px", width: "100px" }}
        />
      </Link>
      <CardContent>
        <Typography variant="body5" component="h5">
          {needProduct.name}
        </Typography>
        <Typography variant="body6">Размер: {orders.size} </Typography>
        <Typography variant="body6">Цена: {needProduct.price} руб.</Typography>
        <Typography variant="body6"> x {orders.numberOfItems} шт.</Typography>
      </CardContent>
      <CardActions>

          <AddIcon onClick={addProduct} />

          <RemoveIcon onClick={minusProduct} />

          <CloseIcon onClick={removeOrder} />

      </CardActions>
      <CardContent style={{ padding: "5px" }}>
        <Typography variant="body5" component="h5"></Typography>
        <Typography variant="body6">
          Итого: {needProduct.price * orders.numberOfItems} руб.
        </Typography>
      </CardContent>
    </ListItem>
  );
}

export default CartItems;
