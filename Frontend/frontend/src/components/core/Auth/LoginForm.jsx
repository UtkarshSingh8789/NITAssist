import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../../services/operations/apiforauthentication.jsx';
const LoginForm=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        email:"",
        password:"",
    })
    const {email,password}=formData;
    const [showPassword, setShowPassword] = useState(false)
    const handleOnChange=(e)=>{
        setFormData((prevData)=>({
            ...prevData,
            [e.target.name]:e.target.value,
        }))
    }
  const handleOnSubmit=(e)=>{
    e.preventDefault();
    dispatch(login(email,password,navigate));// this is used to dispat
  }
}