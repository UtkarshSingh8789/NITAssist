import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../../services/operations/apiforauthentication.jsx';
const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",

  })
  const [showPassword,setShowPassword]=useState(false);
  const { firstName, lastName, email, password } = formData
  const handleOnChange=(e)=>{
    setFormData((prevData)=>({
      ...prevData,
      [e.target.name]:e.target.value,
    }))
  }
  const handleOnSubmit=(e)=>{
    e.preventDefault();
    dispatch(signUp(firstName,lastName,email,password,navigate));
  }
  return (
    <div>
      <form className="flex w-full flex-col gap-y-4 mt-4" onSubmit={handleOnSubmit} >
      <div className="flex gap-x-4">
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900">
              First Name <sup className="text-pink-900">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              className="form-style w-full"
            />
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900">
              Last Name <sup className="text-pink-900">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              className="form-style w-full"
            />
          </label>
        </div>
        <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          className="form-style w-full"
        />
      </label>
        <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900">
              Create Password <sup className="text-pink-900">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="form-style w-full !pr-10"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <button
          type="submit"
          className="mt-6 rounded-[8px] bg-green-500 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm