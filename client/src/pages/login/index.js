
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useToast } from '@chakra-ui/react'

const SigninSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
    terms: Yup
        .bool()
        .oneOf([true], 'You must accept the terms and conditions.'),
});

function page() {
    const toast = useToast()
    const handleSubmit = async (values) => {
        const res = await fetch('http://localhost:3005/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values) // We can Search for Status Code as Well
        })
        const data = await res.json()
        const status = await res.status
        if (status == 404) {
            toast({
                title: data.msg,
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
            })
        }
        else if (status == 200) {
            toast({
                title: data.msg,
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
            })
        }
    }
    return (
        <main className="bg-gray-50 dark:bg-gray-900 md:h-screen">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link href="/" className="flex items-center mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                    <Image src={'/resumora_logo.png'} width={'200'} height={'200'} />
                </Link>
                <div className="w-full bg-white  md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>

                        {/* Formik for Form Validation */}

                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                                terms: false,
                            }}
                            validationSchema={SigninSchema}
                            onSubmit={(values, { resetForm }) => {
                                // same shape as initial values
                                handleSubmit(values);
                                resetForm({ values: '' })
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form className="space-y-4 md:space-y-6">
                                    {/* Email Address  */}
                                    <div>
                                        <label for="email" className="block mb-2 text-semibold font-small text-gray-900 dark:text-white">Email address</label>
                                        <Field name="email" type="email" className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue" />
                                        {errors.email && touched.email ? (
                                            <ErrorMessage name="email" component="div" className="sm:text-sm text-semibold font-small dark:text-red-600" />
                                        ) : null}
                                    </div>

                                    {/* Password  */}
                                    <div>
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <Field name="password" type="password" className="bg-gray-50 border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        {errors.password && touched.password ? (
                                            <ErrorMessage name="password" component="div" className="sm:text-sm text-semibold font-small dark:text-red-600" />
                                        ) : null}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div></div>
                                        <a href="#" className="text-sm font-medium text-white hover:underline">Forgot password?</a>
                                    </div>

                                    {/* Create an account button  */}
                                    <div className="flex items-start">

                                        {/* Terms and Conditions */}
                                        <div>
                                            <Field name="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</Link></label>
                                            {errors.terms && touched.terms ? (
                                                <ErrorMessage name="terms" component="div" className="sm:text-sm text-semibold font-small dark:text-red-600" />
                                            ) : null}
                                        </div>
                                        {/* Terms and Conditions */}

                                    </div>
                                    <button type="submit" onSubmit={values => { handleSubmit(values); }} className="w-full text-white bg-gray-800 hover:bg-[#2f4454] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                    <p className="text-sm font-light text-gray-300 dark:text-gray-200">
                                        Not a member? <Link href="/register" className="font-medium text-primary-600 hover:underline dark:text-red-500"> &nbsp;Sign up</Link>
                                    </p>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page
