import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { department } from '../../../Data/Department.jsx';
import { localfileUpload } from '../../../services/operations/apiforupload.jsx';
import customStylesReactSelect from './customStylesReactSelect.jsx';
const DirectUploads = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const [departmentName, setDepartmentName] = useState('1st Year Department');
  const [departmentYear, setDepartmentYear] = useState('1st year');
  const [subjects, setSubjects] = useState([]);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    Department: departmentName,
    year: departmentYear,
    subject: '',
    file: null,
  });
  const { firstName, lastName, subject } = formData;
  useEffect(() => {
    const selectedDepartment = department.find((dep) => dep.name === departmentName);
    if (selectedDepartment) {
      setSubjects(selectedDepartment.subjects);
      setFormData((prevData) => ({
        ...prevData,
        subject: '',
      }));
    }
  }, [departmentName]);
  
  const handleChangeInYear = (e) => {
    setDepartmentYear(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      year: e.target.value,
    }));
  };

  const handleChangeInDepartment = (e) => {
    setDepartmentName(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      Department: e.target.value,
    }));
  };

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubjectChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      subject: selectedOption ? selectedOption.value : '',
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('submitButton clicked for upload file  ', formData);
    try {
      dispatch(localfileUpload(formData, token));
    } catch (error) {
      console.log('Error in file upload ', error.message);
    }
  };

  const subjectOptions = subjects.map((sub) => ({
    value: sub,
    label: sub,
  }));


  return (
    <div className='min-h-[calc(100vh-3.2rem)] flex w-7/12 mx-auto mb-16 md:pt-36  pt-20'>
      <form className='flex w-full flex-col gap-y-4 mt-4' encType='multipart/form-data' onSubmit={handleOnSubmit}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4'>
          <label>
            <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900'>
              First Name <sup className='text-pink-900'>*</sup>
            </p>
            <input
              required
              type='text'
              name='firstName'
              value={firstName}
              onChange={handleOnChange}
              placeholder='Enter first name'
              className='form-style w-full'
            />
          </label>
          <label>
            <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900'>
              Last Name <sup className='text-pink-900'>*</sup>
            </p>
            <input
              required
              type='text'
              name='lastName'
              value={lastName}
              onChange={handleOnChange}
              placeholder='Enter last name'
              className='form-style w-full'
            />
          </label>
        </div>
        <div className='grid md:grid-cols-2 gap-x-4 gap-y-4'>
          <label className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900'>
            <p>
              Department <sup className='text-pink-900'>*</sup>
            </p>
            <select name='Department' value={departmentName} className='form-style w-full' onChange={handleChangeInDepartment}>
              {department.map((course, index) => (
                <option key={index} value={course.name}>
                  {course.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            <p className='mb-1 text-[0.875rem] leading-[0.875rem] text-richblack-900'>
              Subject Name <sup className='text-pink-900'>*</sup>
            </p>
            <Select
              name='subject'
              value={subjectOptions.find((option) => option.value === subject)}
              onChange={handleSubjectChange}
              options={subjectOptions}
              styles={customStylesReactSelect}
              className='form-style '
              placeholder='Select a subject'
              isClearable
            />
          </label>
        </div>
        <div className='grid md:grid-cols-2 gap-x-4 gap-y-4'>
          <label className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900'>
            <p>
              Year <sup className='text-pink-900'>*</sup>
            </p>
            <select name='year' value={departmentYear} onChange={handleChangeInYear} className='form-style w-full'>
              <option>1st year</option>
              <option>2nd year</option>
              <option>3rd year</option>
              <option>4th year</option>
            </select>
          </label>
          <label className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-900'>
            <p>
              Select File <sup className='text-pink-900'>*</sup>
            </p>
            <input
              type='file'
              required
              name='file'
              onChange={handleFileChange}
              className='form-style w-full'
            />
          </label>
        </div>
        <button type='submit' className='mt-6 rounded-[8px] bg-green-500 py-[8px] px-[12px] font-medium text-richblack-900'>
          Upload
        </button>
      </form>
    </div>
  );
};

export default DirectUploads;
