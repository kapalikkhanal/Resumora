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
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="page flex justify-between ">
                {/* Form side */}
                <div className='md:w-1/2 md:h-full'>
                    <Form onFormSubmit={handleFormSubmit} />
                </div>

                {/* Templetes Side  */}
                <div className='md:w-1/2 md:h-full '>
                    <div>
                        <DownloadButton firstName={firstName} lastName={lastName} email={email} phone={phone} country={country} city={city} license={license} dob={dob}/>
                    </div>
                    {/* Pass formData as props */}
                    <div className='m-5 border-t-4 border-4 md:h-screen border-indigo-500 rounded-xl'>
                        <Template firstName={firstName} lastName={lastName} email={email} phone={phone} country={country} city={city} license={license} dob={dob} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
