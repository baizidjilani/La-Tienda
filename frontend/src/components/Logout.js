import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Logout() {
  useEffect(()=>{
    alert("You are Logged Out. Go Back To The Home Page.")
    localStorage.removeItem('user');
    navigate('/')
  })
  return (
    <div>You are Logged Out. Go Back To The Product Page</div>
  )
}
