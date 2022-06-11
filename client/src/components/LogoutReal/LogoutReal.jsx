import React, { Component } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logout from "@mui/icons-material/Logout";
import { MenuItem, ListItemIcon } from "@mui/material";
import { info, error } from "../Toast/Toast";



function LogoutReal(props) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector(state => state.usersReducer)


  const logout = (e) => {
    dispatch({
      type: "FETCH_LOGOUT_USER",
    });
    localStorage.removeItem('cart')
    info("Вы успешно вышли из системы!");
    navigate("/");
    window.location.reload()
  };

  return (
    <div>
   { (user.isActivated) ? <MenuItem onClick={logout}>
      <ListItemIcon>
        <Logout fontSize="small" />
      </ListItemIcon>
      Выйти
    </MenuItem> : <></> }
    </div>
  );
}

export default LogoutReal;
