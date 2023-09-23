import React, { useState } from 'react';
import Form from '../resume/Form';
import Template from '../resume/Template';
import DownloadButton from '../resume/DownloadButton';

const HomePage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        city: '',
    });

    const handleFormSubmit = (data) => {
        // Update the formData state when the form is submitted
        setFormData(data);
    };

    const { firstName, lastName, email, phone, country, city, license, dob } = formData;

    return (
        <section className="flex bg-gray-50 dark:bg-gray-800">

            {/* Form side */}
            <div className='w-1/2 h-screen overflow-y'>
                <div>
                    <Form onFormSubmit={handleFormSubmit} />
                </div>
            </div>

            {/* Template Side */}
            <div className='w-1/2 h-screen bg-gray-50 dark:bg-gray-900 fixed right-0 top-0'>
                {/* Content of the template side */}
                <div className='p-4'>
                    <div className='custom-height ml-7 mr-7 border-t-4 border-4 border-indigo-500 rounded-xl'>
                        <Template firstName={firstName} lastName={lastName} email={email} phone={phone} country={country} city={city} license={license} dob={dob} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
