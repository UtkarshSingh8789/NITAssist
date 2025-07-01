import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { sendFeedback } from '../../services/operations/feedbackFormApi.jsx';
const FeedbackForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData]=useState({
    Name:"",
    email:"",
    contactNo:"",
    Subject:"",
    message:"",
  })
  const { Name, email, contactNo, Subject, message } = formData
  const handleOnChange=(e)=>{
    setFormData((prevData)=>({
      ...prevData,
      [e.target.name]:e.target.value,
    }))
  }
  const handleOnSubmit=(e)=>{
    e.preventDefault();
    dispatch(sendFeedback(Name,email,contactNo, Subject, message, navigate));
    // this dispatch is used for dispatching a thunk;
    // a thunk is a functions that returns another functions which performs asynchronous logic (API calls, delays, etc.) and can dispatch other actions inside.
    // dispatch is used for:
    // Direct state updates using slice actions (sync updates).
    // Running async operations using thunks, which can then dispatch other actions internally.
  }
    return (
    <div className="flex justify-center items-center w-full">
      <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-md" onSubmit = {handleOnSubmit}>

        <div className="mb-4">
          <label className="block mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900 ">
            Your Name <sup className="text-pink-900">*</sup>
          </label>
          <input
            required
            type="text"
            name="Name"
            value={Name}
            onChange={handleOnChange}
            className="bg-[#fafbfc] w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900">
            Email Address <sup className="text-pink-900">*</sup>
          </label>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            className="bg-[#fafbfc] w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900">
            Contact No.
          </label>
          <input
            type="text"
            name="contactNo"
            value={contactNo}
            onChange={handleOnChange}
            className="bg-[#fafbfc] w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your contact number"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900">
            Subject <sup className="text-pink-900">*</sup>
          </label>
          <input
            required
            type="text"
            name="Subject"
            value={Subject}
            onChange={handleOnChange}
            className="bg-[#fafbfc] w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter subject of the message"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900">
            Message <sup className="text-pink-900">*</sup>
          </label>
          <textarea
            required
            name="message"
            value={message}
            onChange={handleOnChange}
            className="bg-[#fafbfc] w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};
export default FeedbackForm
