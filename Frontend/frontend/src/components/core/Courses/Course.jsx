import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseCard from './CourseCard.jsx';
import SearchBox from '../../common/SearchBox.jsx';
import { department } from '../../../Data/Department.jsx';
const Course = () => {
    const { Department } = useParams();
    const [subjects, setSubjects] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        const dept = department.find((d) => (d.name === Department));
        if (dept) {
            setSubjects(dept.subjects);
        }
    }, [Department]);// whenever there is change in department this effect will run;
    // Filter subjects based on search query
    const filteredSubjects = subjects.filter(
        (subject) =>{
            return subject.toLowerCase().includes(searchQuery.toLowerCase())
        }
    );
    return (
        <div className='min-h-[calc(100vh-3.2rem)]'>
            <div className='h-20 bg-[#86C3FB]  text-center text-xl md:text-4xl font-medium font-sans flex items-center justify-center'>
                {Department}
            </div>
            <div className='md:w-5/12 w-9/12 flex justify-center mx-auto mt-10'>
                <SearchBox onSearch={setSearchQuery} placeholder="Search subjects..." />
            </div>
            <div className='w-10/12 mx-auto m-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4'>
                    {filteredSubjects.map((subject, index) => (
                        <CourseCard key={index} Department={Department} subject={subject} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Course;