import React, { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr'; // Import Flatpickr
import 'flatpickr/dist/themes/dark.css'; // Import Flatpickr CSS

const DatePicker = ({ onSelect }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        const datePicker = flatpickr(inputRef.current, {
            dateFormat: 'Y-m-d', // Customize the date format as needed
            maxDate: 'today',   // Optional: Set a maximum date (e.g., today)
            onChange: (selectedDates, dateStr) => {
                onSelect(dateStr); // Pass the selected date to the parent component
            },
        });

        return () => {
            datePicker.destroy(); // Clean up Flatpickr when the component unmounts
        };
    }, [onSelect]);

    return (
        <input
            ref={inputRef}
            type="text"
            className="w-full bg-gray-800 p-3 text-sm font-normal text-gray-500 dark:text-gray-400 border rounded-lg"
            placeholder="Select a date"
        />
    );
};

export default DatePicker;
