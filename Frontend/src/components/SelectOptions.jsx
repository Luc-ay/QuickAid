import React from 'react';
import Select from 'react-select';

const SelectOptions = ({
  label = "",
  placeholder = "Select an Option",
  selectedState,
  setSelectedState,
  options = [],
}) => {
  const formattedOptions = options.map(opt => ({
    label: opt,
    value: opt
  }));

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
      borderColor: state.isFocused ? '#3b82f6' : '#d1d5db', // Tailwind blue-500 / gray-300
      boxShadow: state.isFocused ? '0 0 0 2px #3b82f6' : 'none',
      height: "52px",
      '&:hover': {
        borderColor: '#3b82f6'
      }
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'rgba(255,255,255,0.9)', // semi-transparent dropdown
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#000' // or inherit, depending on your theme
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#9ca3af' // Tailwind gray-400
    })
  };

  return (
    <div className="mb-4  ">
      <label className="block text-sm font-medium text-gray-600 mb-2">
        {label}
      </label>
      <Select
        options={formattedOptions}
        value={selectedState}
        onChange={setSelectedState}
        placeholder={placeholder}
        styles={customStyles}
      />
    </div>
  );
};

export default SelectOptions;
