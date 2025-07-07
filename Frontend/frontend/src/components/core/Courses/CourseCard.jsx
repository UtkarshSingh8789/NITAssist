import React from 'react'
import Button from '../../common/Button';

const CourseCard = (props) => {
    const subject = props.subject;
    const Department = props.Department;
    return (
        <div className='border-2 border-black bg-white rounded-xl flex flex-col justify-center items-center md:w-full w-11/12 mx-auto h-52'>
            {/* Upper Part */}
            <div className='w-full md:h-40 h-32  bg-gradient-to-b from-cyan-400 to-blue-500  flex justify-center items-center text-black font-medium text-xl rounded-t-xl text-center'>
                     {subject}
            </div>
            {/* Lower Part */}
            <div className='w-full md:h-24 h-20 bg-[#EDF4FB] flex flex-col justify-center items-center rounded-b-lg'>
                <Button active={false} linkto={`/courses/${Department}/subjectNotes/${subject}`}>
                    Access Course
                </Button>
            </div>
        </div>
    )
}

export default CourseCard