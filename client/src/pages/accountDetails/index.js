'use client'
import { React } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useToast } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import { useDispatch, useSelector } from 'react-redux';
import {changeUserDetails} from '../../redux/reducerSlices/userSlice'

export default function page() {
    const toast = useToast()
    const { userDetails } = useSelector(state => state.user)
    const dispatch =useDispatch()

    const uploadImage = async (file) => {
        const formData = new FormData()
        formData.append('avatar', file)
        const res = await fetch('http://localhost:3005/user-image/' + userDetails._id, {
            method: 'POST',
            body: formData
        })
        const data = await res.json()
    }

    const fetchUserDetails = async () => {
        const res = await fetch('http://localhost:3005/user/' + userDetails._id)
        const data = await res.json()
        if (data) {
            dispatch(changeUserDetails(data.userDetails))
        }
    }

    const editUsersDetails = async (values) => {
        const res = await fetch('http://localhost:3005/accountDetails/' + userDetails._id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        })
        const data = await res.json()
        if (res.status == 200) {
            fetchUserDetails()
        }
    }

    const handleSubmit = async (values) => {
        const res = await fetch('http://localhost:3005/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values) // We can Search for Status Code as Well
        })
    }

    return (
        <div>
            <body className="min-h-screen w-full bg-gray-50 dark:bg-gray-900">
                {/* Navigation Bar  */}

                <NavBar />
                {/* End of Navigation Bar */}

                <div className="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">
                    <div className="bg-white  md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900">
                        <div className="p-6 space-y-4 md:space-y-6 ">

                            {/* Formik for Form Validation */}

                            <Formik
                                initialValues={userDetails}
                                onSubmit={(values, { resetForm }) => {
                                    // same shape as initial values
                                    editUsersDetails(values)
                                    resetForm({ values: '' })
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form className="space-y-4 md:space-y-6">
                                        {/* First and Last Name */}
                                        <div className='flex justify-between space-x-5'>
                                            {/* First Name  */}
                                            <div>
                                                <label for="firstName" className="block mb-2 text-semibold font-small dark:text-white">First Name</label>
                                                <Field name="firstName" className="border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue" />
                                                {errors.firstName && touched.firstName ? (
                                                    <ErrorMessage name="firstName" component="div" className="sm:text-sm text-semibold font-small dark:text-red-600" />
                                                ) : null}
                                            </div>
                                            {/* Last Name  */}
                                            <div>
                                                <label for="lastName" className="block mb-2 text-semibold font-small text-gray-900 dark:text-white">Last Name</label>
                                                <Field name="lastName" className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue" />
                                                {errors.lastName && touched.lastName ? (
                                                    <ErrorMessage name="lastName" component="div" className="sm:text-sm text-semibold font-small dark:text-red-600" />
                                                ) : null}
                                            </div>
                                        </div>

                                        {/* Country Name */}

                                        {/* <div>
                                            <label for="countryName" className="block mb-2 text-semibold font-small text-gray-900 dark:text-white">Country</label>
                                            <Demo />
                                        </div> */}



                                        {/* Email Address  */}
                                        <div>
                                            <label for="email" className="block mb-2 text-semibold font-small text-gray-900 dark:text-white">Email address</label>
                                            <Field name="email" type="email" className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue" />
                                            {errors.email && touched.email ? (
                                                <ErrorMessage name="email" component="div" className="sm:text-sm text-semibold font-small dark:text-red-600" />
                                            ) : null}
                                        </div>

                                        {/* Upload Image  */}
                                        <div>
                                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Profile Image</label>
                                            <input class="hover:bg-[#2f4454] block w-full p-1 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer dark:text-gray-400 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                                        </div>


                                        <button type="submit" onChange={e => uploadImage(e.target.files[0])}  className="w-full text-white bg-gray-800 hover:bg-[#2f4454] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update Details</button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div >
                </div >
            </body >
        </div >

    );
}
