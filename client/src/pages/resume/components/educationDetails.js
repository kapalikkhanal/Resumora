import React, { useState } from 'react'
import { useFormik } from 'formik';
import DatePicker from './datePicker';
import TextEditor from './textEditor';


const EducationDetails = ({ onFormSubmit }) => {
    const [isFieldsVisible, setIsFieldsVisible] = useState(false); // State variable for visibility
    const [selectedDate, setSelectedDate] = useState('');
    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };
    const toggleFieldsVisibility = () => {
        setIsFieldsVisible(!isFieldsVisible); // Toggle visibility when the button is clicked
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            country: '',
            city: '',
            license: '',
            dob: '',

        },
        onSubmit: (values) => {
            // Pass the form data to the parent component
            onFormSubmit(values);
        },
    });
    return (
        <div>
            {/* Educational Details  */}
            <div className='ml-12 mr-12 mt-12'>
                <h1 className="mb-3 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Education
                </h1>

                <button onClick={toggleFieldsVisibility} className=" text-blue-500 text-center">+ Add education details</button>
                <form onSubmit={formik.handleSubmit} className='space-y-4'>
                    {/* Add education details  */}
                    {/* School and Degree */}
                    <div className='flex justify-between space-x-16'>
                        {/* School */}
                        <div className='flex flex-col flex-grow items-start space-y-1'>
                            {isFieldsVisible && (
                                <>
                                    <label htmlFor="school" className="text-center text-semibold font-small dark:text-white">School</label>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.school}
                                        name="school"
                                        id="school" // Use the 'id' attribute to associate the label with the input
                                        className="w-full border border-gray-900 text-gray-900 sm:text-sm rounded-lg p-3 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                                    />
                                </>
                            )}
                        </div>
                        {/* Degree */}
                        <div className='flex flex-col flex-grow items-start space-y-1'>
                            {isFieldsVisible && (
                                <>
                                    <label htmlFor="degree" className="text-center text-semibold font-small dark:text-white">Degree</label>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.degree}
                                        name="degree"
                                        id="degree" // Use the 'id' attribute to associate the label with the input
                                        className="w-full border border-gray-900 text-gray-900 sm:text-sm rounded-lg p-3 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                                    />
                                </>
                            )}
                        </div>
                    </div>

                    {/* Start and End Date, City */}
                    <div className='flex justify-between space-x-16'>
                        {/*Start and End Date */}
                        <div className='flex flex-col flex-grow items-start space-y-1'>
                            {isFieldsVisible && (
                                <div>
                                    <label htmlFor="startDate" className="text-center text-semibold font-small dark:text-white">Start Date</label>
                                    <DatePicker onSelect={handleDateSelect} />
                                </div>
                            )}
                        </div>
                        {/* End Date */}
                        <div className='flex flex-col flex-grow items-start space-y-1'>
                            {isFieldsVisible && (
                                <div>
                                    <label htmlFor="startDate" className="text-center text-semibold font-small dark:text-white">Start Date</label>
                                    <DatePicker onSelect={handleDateSelect} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Education Discription */}
                    <div>
                        {isFieldsVisible && (
                            <>
                                <label htmlFor="startDate" className="text-center text-semibold font-small dark:text-white">Discription</label>
                                <TextEditor />
                            </>
                        )}
                    </div>
                </form>
                
            </div>

        </div>
    )
}

export default EducationDetails;