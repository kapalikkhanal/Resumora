import React from 'react';

const DOBAndCountryStep = ({ prevStep, nextStep, handleChange, dob, country }) => (
    <div>
        <h1 className="mb-10 text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Educational Details
        </h1>

        <div className='flex justify-center'>
            {/* First Name  */}
            <div>
                <label for="firstName" className="text-center block mb-2 text-semibold font-small dark:text-white">First Name</label>
                <input name="firstName" className="border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue" />
            </div>
            {/* Last Name  */}
            <div>
                <label for="firstName" className="text-center block mb-2 text-semibold font-small dark:text-white">Last Name</label>
                <input name="firstName" className="border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue" />
            </div>
        </div>

        <div className='flex justify-center'>
            {/* Email  */}
            <div>
                <label for="firstName" className="text-center block mb-2 text-semibold font-small dark:text-white">Email</label>
                <input name="firstName" className="border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue" />
            </div>
            {/* Last Name  */}
            <div>
                <label for="firstName" className="text-center block mb-2 text-semibold font-small dark:text-white">Phone</label>
                <input name="firstName" className="border border-gray-900 text-gray-900 sm:text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue" />
            </div>
        </div>
        <div className='flex justify-center'>
            <div>
                <button onClick={prevStep} type="submit" onSubmit={values => { handleSubmit(values); }}
                    className="w-full text-white bg-gray-800 hover:bg-[#2f4454] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >Back</button>
            </div>
            <div>
                <button onClick={nextStep} type="submit" onSubmit={values => { handleSubmit(values); }}
                    className="w-full text-white bg-gray-800 hover:bg-[#2f4454] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >Next Step</button>
            </div>
        </div>
        {/* <button onClick={nextStep}>Next</button> */}
    </div>
);

export default DOBAndCountryStep;
