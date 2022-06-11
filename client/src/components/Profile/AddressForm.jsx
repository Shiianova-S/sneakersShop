import React from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../Toast/Toast";


function AddressForm(props) {
  const dispatch = useDispatch();
  // const  {cartProducts}= useSelector((state)=> state.cartReducer)
  // console.log(cartProducts.product, 'cartProdu');
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    info('Адресные данные для доставки успешно отправлены администратору');
    const body = {
      name: data.name,
      address: data.address,
      phone: data.phone,
      // cartProducts:data.cartProducts
    };
    dispatch({type:'FETCH_ORDER_SEND', payload:body});
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
{/*       
      <TextField
      type="hidden"
      {...register("cartProducts")}
      value = {cartProducts}
      id="cartProducts"
    /> */}
 
    <TextField
      margin="normal"
      type="text"
      {...register("name", {
        minLength: {
          value: 3,
          message: "ФИО не должны быть короче 3 символов",
        },
      })}
      required
      fullWidth
      id="name"
      label="Укажите ФИО для получения посылки"
      autoComplete="name"
      autoFocus
    />
    <div style={{ height: 40 }}>
      {errors?.name && <p>{errors?.name?.message || "введи действительное имя!"}</p>}
    </div>
    <TextField
      margin="normal"
      type="text"
      {...register("address", {
        minLength: {
          value: 2,
          message: "Введите действительный адрес доставки",
        },
      })}
      required
      fullWidth
      id="address"
      label="Почтовый адрес доставки"
      autoComplete="address"
      autoFocus
    />
    <div style={{ height: 40 }}>
      {errors?.address && <p>{errors?.address?.message || "Введите действительный адрес доставки!"}</p>}
    </div>
    <TextField
      margin="normal"
      type="text"
      {...register("phone", {
        minLength: {
          value: 11,
          message: "номер телефона не может быть меньше 11",
        },
      })}
      required
      fullWidth
      id="phone"
      label="введи действительный телефон для связи!"
      autoComplete="phone"
      autoFocus
    />
    <div style={{ height: 40 }}>
      {errors?.phone && <p>{errors?.phone?.message || "введи действительный телефон для связи!"}</p>}
    </div>
    <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Подтвердить заказ
          </Button>
    </form>
  );
}

export default AddressForm;
