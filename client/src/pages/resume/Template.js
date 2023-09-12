// components/Template.js

import React from 'react';
import { readFileSync, writeFileSync} from 'fs';
import { createReport } from 'docx-templates';

const template = readFileSync('public/templates/template.docx');

const Template = ({ firstName, lastName, email, phone, country, city, license, dob }) => {
    return (
        <div className="template text-rose-50 m-10">
            <h2>{firstName}{lastName}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{country}</p>
            <p>{city}</p>
            <p>{license}</p>
            <p>{dob}</p>
            {/* Add more template elements */}
        </div>
    );
};

export default Template;
