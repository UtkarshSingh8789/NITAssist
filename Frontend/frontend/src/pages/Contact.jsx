import React from 'react';
import FeedbackForm from '../components/common/FeedbackForm.jsx';
const Contact = () => {
  return (
    <div className="grid min-h-[calc(100vh-3.2rem)] place-items-center">
      <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-center items-center gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
        <div className="w-full max-w-[450px]">
          <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-900 text-center mb-6">
            Contact Us
          </h1>
          <FeedbackForm/>
        </div>
      </div>
    </div>
  );
};
export default Contact;