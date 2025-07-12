import React from 'react'
import Template from '../components/core/Auth/Template.jsx'
import loginImg from '../assets/Images/login.webp'
const Login = () => {
  return (
    <>
     <Template 
      title="Welcome Back"
      description1="Shape your skills for today’s goals, tomorrow’s opportunities, and a limitless future."
      description2="Learn today to lead tomorrow."
      image={loginImg}
      formType="login"

    />
    </>
   
  )
}
export default Login