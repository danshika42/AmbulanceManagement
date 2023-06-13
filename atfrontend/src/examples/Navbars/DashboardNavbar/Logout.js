import React from 'react'
import { useStateValue } from "ContextProvider/StateContext";
import Button from '@mui/material/Button';


export default function Logout() {
  const [{AuthToken,User},dispatch]=useStateValue();

  function add_AuthToken(data){
    dispatch({
      type:'ADD_AUTHTOKEN',
      AuthToken_data:data
    })
  }

  function add_User(data){
    dispatch({
      type:'ADD_USER',
      User_data:data
    })
  }
  function logoutUser(){
    console.log("Logged out");
    add_User({});
    add_AuthToken({});
  }
  return (
    <Button size='small' color='inherit' onClick={logoutUser} variant="text">LOG OUT</Button>
  )
}
