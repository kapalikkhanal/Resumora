import React from 'react';
import { useFormik } from 'formik';
import Image from 'next/image'
import Link from 'next/link';

const Form = ({ onFormSubmit }) => {
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
        <section className="bg-gray-50 dark:bg-gray-900">
            <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-30 h-full transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul class="space-y-5 font-medium">
                        <li>
                            {/* Logo */}
                            <div className='mx-8 p-2'>
                                <Link href={"/"}>
                                    <Image src={'/small_logo.png'} width={'50'} height={'50'} alt='' />
                                </Link>
                            </div>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span class="ml-3">Details</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Education</span>
                            </a>
                        </li>

                        

                        <li>
                            <form onSubmit={formik.handleSubmit} >
                                <button onSubmit={formik.handleSubmit} type="submit" className="w-full border border-indigo-500 text-white bg-gray-800 hover:bg-[#2f4454] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    Generate
                                </button>
                            </form>
                        </li>

                    </ul>
                </div>
            </aside>
            <div className='flex justify-around'>
                <div className='w-30 md:h-screen'>
                    {/* For side Navigation */}
                </div>

                {/* Actual Form Data  */}
                <div className='flex flex-col py-10'>
                    <h1 className="mb-10 text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Personal Details
                    </h1>
                    <form onSubmit={formik.handleSubmit} className="space-y-5">
                        {/* First and Last Name */}
                        <div className='flex justify-between space-x-5 '>
                            {/* Name  */}
                            <div>
                                <label for="firstName" className="text-center block mb-2 text-semibold font-small dark:text-white">First Name</label>
                                <input onChange={formik.handleChange} value={formik.values.firstName} name="firstName" className="border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue" />
                            </div>
                            {/* Address  */}
                            <div>
                                <label for="lastName" className="text-center block mb-2 text-semibold font-small text-gray-900 dark:text-white">Last Name</label>
                                <input onChange={formik.handleChange} value={formik.values.lastName} name="lastName" className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue" />
                            </div>
                        </div>
                        <div>
                            <label for="email" className="text-center block mb-2 text-semibold font-small text-gray-900 dark:text-white">Email</label>
                            <input type='email' onChange={formik.handleChange} value={formik.values.email} name="email" className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue" />
                        </div>
                        <div>
                            <label for="phone" className="text-center block mb-2 text-semibold font-small text-gray-900 dark:text-white">Phone</label>
                            <input onChange={formik.handleChange} value={formik.values.phone} name="phone" className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue" />
                        </div>

                        {/* Country and City */}
                        <div className='flex justify-between space-x-5'>
                            {/* Name  */}
                            <div>
                                <label for="country" className="text-center block mb-2 text-semibold font-small dark:text-white">Country</label>
                                <input onChange={formik.handleChange} value={formik.values.country} name="country" className="border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue" />
                            </div>
                            {/* Address  */}
                            <div>
                                <label for="city" className="text-center block mb-2 text-semibold font-small text-gray-900 dark:text-white">City</label>
                                <input onChange={formik.handleChange} value={formik.values.city} name="city" className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue" />
                            </div>
                        </div>

                        {/* Driving License and DOB */}
                        <div className='flex justify-between space-x-5'>
                            {/* Name  */}
                            <div>
                                <label for="license" className="text-center block mb-2 text-semibold font-small dark:text-white">Driving License</label>
                                <input onChange={formik.handleChange} value={formik.values.license} name="license" className="border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue" />
                            </div>
                            {/* Address  */}
                            <div>
                                <label for="dob" className="text-center block mb-2 text-semibold font-small text-gray-900 dark:text-white">Date Of Birth</label>
                                <input onChange={formik.handleChange} value={formik.values.dob} name="dob" className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section >
    );
};

export default Form;
