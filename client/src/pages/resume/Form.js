import React from 'react';
import { useFormik } from 'formik';
import PersonalDetails from './components/personalDetails';
import ProfileSummary from './components/profileSummary';
import EducationDetails from './components/educationDetails';
import SkillDetails from './components/skillDetails';
import Footer from '../components/Footer';
import SocialMedia from './components/socialMedia';

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
        <section className="bg-gray-50 dark:bg-gray-800">

            {/* Personal Details  */}
            <PersonalDetails />

            {/* Profile Summary  */}
            <ProfileSummary />

            {/* Education Details  */}
            <EducationDetails />

            {/* Skill Details  */}
            <SkillDetails />

            {/* Skill Details  */}
            <SocialMedia />

            {/* Footer */}
            <Footer />
            {/* End of Footer */}

        </section >
    );
};

export default Form;
