import React from 'react';
const SearchBox = ({ onSearch, placeholder }) => {
    const handleInputChange = (event) => {
        onSearch(event.target.value);
    };
    return (
        <input 
            type="text"
            placeholder={placeholder}
            onChange={handleInputChange}
            className="border-2 p-2 rounded-full w-full hover:border-blue-500 focus:outline-none focus:border-blue-500"
        />
    );
};
export default SearchBox;