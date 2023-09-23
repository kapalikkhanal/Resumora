import React from 'react';

const CustomButton = ({ buttonName, onClick, width }) => {
    const buttonStyle = {
        width: width || 'auto', // Use the provided width or 'auto' as the default
    };
    return (
        <button
            onClick={onClick}
            style={buttonStyle}
            className="text-white bg-gray-800 hover:bg-[#2f4454] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
            {buttonName}
        </button>
    );
};

export default CustomButton;
