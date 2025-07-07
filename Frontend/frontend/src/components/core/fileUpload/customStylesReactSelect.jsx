  

  // Custom styles for the react-select component
const customStylesReactSelect = {
    control: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: 'white',  // Background color of the input
      color: 'black',  // Text color
    }),
    input: (baseStyles) => ({
      ...baseStyles,
      color: 'black',  // Text color in the search box
    }),
    singleValue: (baseStyles) => ({
      ...baseStyles,
      color: 'black',  // Text color for selected option
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: '#fafbfc',  // Background color of the dropdown menu
      color: 'black',  // Text color of the options
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#b6d0fa' : '#fafbfc',
      color: 'black',
      '&:hover': {
        backgroundColor: '#629af5',
      },
    }),
    placeholder: (baseStyles) => ({
      ...baseStyles,
      color: 'grey',  // Text color for the placeholder
    }),
  };

   export default customStylesReactSelect;