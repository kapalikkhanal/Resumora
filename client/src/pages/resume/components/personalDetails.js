import React, { useState } from 'react'
import { useFormik } from 'formik';
import Link from 'next/link';
import Image from 'next/image';

const PersonalDetails = ({ onFormSubmit }) => {
    const [isFieldsVisible, setIsFieldsVisible] = useState(false); // State variable for visibility

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
            {/* Banner  */}
            <div id="marketing-banner" tabindex="-1" className="flex flex-col md:flex-row justify-between m-10 p-10 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 top-6 dark:bg-gray-700 dark:border-gray-600">
                <div className="flex flex-col items-start mb-3 mr-4 md:items-center md:flex-row md:mb-0">
                    <a href="https://flowbite.com/" className="flex items-center mb-2 border-gray-200 md:pr-4 md:mr-4 md:border-r md:mb-0 dark:border-gray-600">
                        <image src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-2" alt="Flowbite Logo" />
                        <Link href={"/"}>
                            <Image src={'/resumora_logo.png'} width={'200'} height={'200'} alt='' />
                        </Link>
                    </a>
                    <div>
                        <h1>Ensure your resume fits the job opening.</h1>
                        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">Give your best, boost your chances.</p>
                    </div>
                </div>
            </div>

            {/* Personal Details  */}
            <div className='ml-12 mr-12'>
                <h1 className="mb-3 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Personal Details
                </h1>
                <form onSubmit={formik.handleSubmit} className='space-y-6'> 
                    {/* First and Last Name */}
                    <div className='flex justify-between space-x-16'>
                        {/* First Name */}
                        <div className='flex flex-col flex-grow items-start space-y-1'>
                            <label htmlFor="firstName" className="text-center text-semibold font-small dark:text-white">First Name</label>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                                name="firstName"
                                id="firstName" // Use the 'id' attribute to associate the label with the input
                                className="w-full border border-gray-900 text-gray-900 sm:text-sm rounded-lg p-3 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                            />
                        </div>
                        {/* Last Name */}
                        <div className='flex flex-col flex-grow items-start space-y-1'>
                            <label htmlFor="lastName" className="text-center text-semibold font-small dark:text-white">Last Name</label>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                                name="lastName"
                                id="lastName" // Use the 'id' attribute to associate the label with the input
                                className="w-full border border-gray-900 text-gray-900 sm:text-sm rounded-lg p-3 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                            />
                        </div>
                    </div>

                    {/* Email and Phone Number */}
                    <div className='flex justify-between space-x-16'>
                        {/* Email */}
                        <div className='flex flex-col flex-grow items-start space-y-1'>
                            <label htmlFor="email" className="text-center text-semibold font-small dark:text-white">Email</label>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                name="email"
                                id="email" // Use the 'id' attribute to associate the label with the input
                                className="w-full border border-gray-900 text-gray-900 sm:text-sm rounded-lg p-3 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                            />
                        </div>
                        {/* Phone Number */}
                        <div className='flex flex-col flex-grow items-start space-y-1'>
                            <label htmlFor="phone" className="text-center text-semibold font-small dark:text-white">Phone Number</label>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                                name="phone"
                                id="phone" // Use the 'id' attribute to associate the label with the input
                                className="w-full border border-gray-900 text-gray-900 sm:text-sm rounded-lg p-3 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                            />
                        </div>
                    </div>

                    {/* Country and City */}
                    <div className='flex justify-between space-x-16'>
                        {/* Country */}
                        <div className='flex flex-col flex-grow items-start space-y-1'>
                            <label htmlFor="country" className="text-center text-semibold font-small dark:text-white">Country</label>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.country}
                                name="country"
                                id="country" // Use the 'id' attribute to associate the label with the input
                                className="w-full border border-gray-900 text-gray-900 sm:text-sm rounded-lg p-3 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                            />
                        </div>
                        {/* City */}
                        <div className='flex flex-col flex-grow items-start space-y-1'>
                            <label htmlFor="city" className="text-center text-semibold font-small dark:text-white">City</label>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.city}
                                name="city"
                                id="city" // Use the 'id' attribute to associate the label with the input
                                className="w-full border border-gray-900 text-gray-900 sm:text-sm rounded-lg p-3 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                            />
                        </div>
                    </div>

                    <button onClick={toggleFieldsVisibility} className=" text-blue-500 text-center">+ Add more details</button>

                    {/* Add more details  */}
                    {/* Address and Postal Code */}
                    <div className='flex justify-between space-x-16'>
                        {/* Address */}
                        <div className='flex flex-col flex-grow items-start space-y-1'>
                            {isFieldsVisible && (
                                <>
                                    <label htmlFor="address" className="text-center text-semibold font-small dark:text-white">Address</label>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.address}
                                        name="address"
                                        id="address" // Use the 'id' attribute to associate the label with the input
                                        className="w-full border border-gray-900 text-gray-900 sm:text-sm rounded-lg p-3 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                                    />
                                </>
                            )}
                        </div>
                        {/* Postal Code */}
                        <div className='flex flex-col flex-grow items-start space-y-1'>
                            {isFieldsVisible && (
                                <>
                                    <label htmlFor="code" className="text-center text-semibold font-small dark:text-white">Postal Code</label>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.code}
                                        name="code"
                                        id="code" // Use the 'id' attribute to associate the label with the input
                                        className="w-full border border-gray-900 text-gray-900 sm:text-sm rounded-lg p-3 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                                    />
                                </>
                            )}
                        </div>
                    </div>

                    {/* Driving License and Nationality */}
                    <div className='flex justify-between space-x-16'>
                        {/* Driving License */}
                        <div className='flex flex-col flex-grow items-start space-y-1'>
                            {isFieldsVisible && (
                                <>
                                    <label htmlFor="license" className="text-center text-semibold font-small dark:text-white">Driving License</label>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.license}
                                        name="license"
                                        id="license" // Use the 'id' attribute to associate the label with the input
                                        className="w-full border border-gray-900 text-gray-900 sm:text-sm rounded-lg p-3 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                                    />
                                </>
                            )}
                        </div>
                        {/* Nationality */}
                        <div className='flex flex-col flex-grow items-start space-y-1'>
                            {isFieldsVisible && (
                                <>
                                    <label htmlFor="nationality" className="text-center text-semibold font-small dark:text-white">Nationality</label>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.nationality}
                                        name="nationality"
                                        id="nationality" // Use the 'id' attribute to associate the label with the input
                                        className="w-full border border-gray-900 text-gray-900 sm:text-sm rounded-lg p-3 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                                    />
                                </>
                            )}
                        </div>
                    </div>

                    {/* Birth Place and DOB */}
                    <div className='flex justify-between space-x-16'>
                        {/* Birth Place */}
                        <div className='flex flex-col flex-grow items-start space-y-1'>
                            {isFieldsVisible && (
                                <>
                                    <label htmlFor="birthPlace" className="text-center text-semibold font-small dark:text-white">Birth Place</label>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.birthPlace}
                                        name="birthPlace"
                                        id="birthPlace" // Use the 'id' attribute to associate the label with the input
                                        className="w-full border border-gray-900 text-gray-900 sm:text-sm rounded-lg p-3 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                                    />
                                </>
                            )}
                        </div>
                        {/* Date of Birth */}
                        <div className='flex flex-col flex-grow items-start space-y-1'>
                            {isFieldsVisible && (
                                <>
                                    <label htmlFor="dob" className="text-center text-semibold font-small dark:text-white">Date of Birth</label>
                                    <input
                                        onChange={formik.handleChange}
                                        value={formik.values.dob}
                                        name="dob"
                                        id="dob" // Use the 'id' attribute to associate the label with the input
                                        className="w-full border border-gray-900 text-gray-900 sm:text-sm rounded-lg p-3 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PersonalDetails