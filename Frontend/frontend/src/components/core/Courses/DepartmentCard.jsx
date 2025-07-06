import React, { useState } from 'react';
import { department } from '../../../Data/Department.jsx';
import Button from '../../common/Button.jsx';
import SearchBox from '../../common/SearchBox.jsx';
// this component is for dusplaying all the department and has search functionality which help in fast searching of respective department;
const DepartmentCard = () => {
    const [searchQuery, setSearchQuery] = useState('');
    // Filter courses based on the search query
    const filteredCourses = department.filter(course => 
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className="mt-10">
            {/* Search Box */}
            <div className="md:w-5/12 w-9/12 flex justify-center mx-auto">
                <SearchBox 
                    onSearch={setSearchQuery}  
                    placeholder="Search Departments"
                />
            </div>
            {/* Department Cards */}
            <div className="md:w-10/12 w-9/12 mx-auto my-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredCourses.map((course, index) => (
                        <div 
                            key={index} 
                            className="flex justify-center items-center border-2 border-black rounded-xl w-full md:h-64 h-52 flex-col"
                        >
                            
                                {/* Department Name */}
                                <div className="w-full md:h-40 h-32 bg-gradient-to-b from-cyan-400 to-blue-500 flex justify-center items-center rounded-t-xl text-black font-medium text-xl text-center ">
                                    {course.name}
                                </div>
                                {/* Select Department Button */}
                                <div className="w-full md:h-24 h-20 bg-[#EDF4FB] flex justify-center items-center rounded-b-lg">
                                    <Button 
                                        active={false} 
                                        linkto={`/courses/${course.name}`}
                                    >
                                        Select Department
                                    </Button>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DepartmentCard;
