import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

function RegForm(props) {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
    const body = {
      email: data.email,
      password: data.password,
      role: data.role,
    };
    dispatch({type: "FETCH_CREATE_USER", payload: body})
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3> Регистрация</h3>
      <label>
        Email
        <input
          type="text"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
      </label>
      <div style={{ height: 20 }}>
        {errors?.email && (
          <p>{errors?.email?.message || "Введите действительную почту"}</p>
        )}
      </div>
      <label>
        Задайте пароль
        <input
          type="password"
          {...register("password", {
            required: true,
            minLength: {
              value: 5,
              message: "Пароль должен содержать не менее 5 символов",
            },
          })}
        />
      </label>
      <div style={{ height: 20 }}>
        {errors?.password && (
          <p>{errors?.password?.message || "Введите корректный пароль"}</p>
        )}
      </div>
      <label>
      role
        <input
          type="text"
          {...register("role", {
            required: true,
            minLength: {
              value: 2,
              message: "Имя не должны быть короче 2 символов",
            },
          })}
        />
      </label>
      <div style={{ height: 20 }}>
        {errors?.role && <p>{errors?.role?.message || "Eror!"}</p>}
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

export default RegForm;
