import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { info, error } from "../Toast/Toast";

import 'react-toastify/dist/ReactToastify.css';



export default function Signup() {

 
     
  const theme = createTheme();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    control,
    formState: { errors},
    handleSubmit,
  } = useForm();



  const onSubmit = (data) => {
    const body = {
      // role: data.role,
      email: data.email,
      password: data.password,
    };
   
    if(data.password===data.passwordConfirm) {
      dispatch({ type: "FETCH_CREATE_USER", payload: body });
      info("Для подтверждения регистрации перейдите по ссылке в письме отправленнной на Ваш e-mail");
      navigate('/products')
    } else {
      error('Пароли не совпадают');
    }
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container style={{ marginTop: '100px'}}  component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Регистрация
          </Typography>
          <Box component="form" noValidate sx={{ mt: 2 }} onSubmit={handleSubmit(onSubmit)}>
          {/* <TextField
              margin="normal"
              {...register("role", {
                required: true,
                minLength: {
                value: 2,
                message: "Роль не должна быть короче 2 символов",
              },
            })}
              required
              fullWidth
              id="role"
              label="Введите свою роль"
              autoComplete="role"
              autoFocus
            />
 
              {errors?.role && (
                <p>
                  {errors?.role?.message || "Введите действительную почту"}
                </p>
              )} */}
            <TextField
              margin="normal"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              required
              fullWidth
              id="email"
              label="Введите Вашу электронную почту"
              autoComplete="email"
              autoFocus
            />
 
              {errors?.email && (
                <p>
                  {errors?.email?.message || "Введите действительную почту"}
                </p>
              )}

            <TextField
              margin="normal"
              {...register("password", {
                required: true,
                minLength: {
                  value: 5,
                  message: "Пароль должен содержать не менее 5 символов",
                },
              })}
              required
              fullWidth
              name="password"
              label="Задайте пароль"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
              {errors?.password && (
                <p>
                  {errors?.password?.message || "Введи адекватный пароль"}
                </p>
              )}
               <TextField
              margin="normal"
              {...register("passwordConfirm", {
                required: true,
                minLength: {
                  value: 5,
                  message: "Пароль должен содержать не менее 5 символов",
                },
              })}
              required
              fullWidth
              name="passwordConfirm"
              label="Подтвердите пароль"
              type="password"
              id="passwordConfirm"
              autoComplete="current-password"
            />
            
              {errors?.password && (
                <p>
                  {errors?.passwordConfirm?.message || "Подтвердите адекватный пароль"}
                </p>
              )}
           
            <FormControlLabel
              control={
                <Controller
                  name="checkbox"
                  control={control}
                  render={({ field }) => <Checkbox {...field} />}
                />
              }
              label="Запомнить меня"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit(onSubmit)}
            >
              Зарегистрироваться
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
