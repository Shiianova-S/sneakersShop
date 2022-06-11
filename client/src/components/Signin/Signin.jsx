import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { info } from "../Toast/Toast";

const theme = createTheme();

export default function SignIn({ setDialogOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // const { user } = useSelector(state => state.userReducer);
  // console.log('login', user);
 
  const {
    register,
    control,
    formState: { errors,
      //  isSubmitted
       },
    handleSubmit,
  } = useForm({
    defaultValues: {
      checkbox: false,
    },
  });

  const onSubmit = (data) => {
    const user = {
      email: data.email,
      password: data.password,
    };
    dispatch({
      type: "FETCH_LOGIN_USER",
      payload: user,
    });
    info('Вы успешно вошли в систему')
    navigate('/')
    window.location.reload()
  };

  return (
    <ThemeProvider theme={theme}>
      <Container  component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Войти
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={handleSubmit(onSubmit)}
          >
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
              <p>{errors?.email?.message || "Введите действительную почту"}</p>
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
              label="Введите пароль"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            {errors?.password && (
              <p>{errors?.password?.message || "Введи нормальную почту"}</p>
            )}

            <FormControlLabel
              // control={<Checkbox  Controller name="checkbox" control={control} color="primary"/>}
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
              type="click"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=> setDialogOpen(false)}
            >
              Войти
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Забыли пароль?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Зарегистрироваться"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
