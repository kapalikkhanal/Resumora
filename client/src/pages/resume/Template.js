// components/Template.js

import React from 'react';
import { createReport } from 'docx-templates';
import * as fs from 'fs';

// const template = fs.readFileSync('template.docx');
// const result = fs.readFilesync('template.docs');
// console.log(result);

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

// const Template = ({ firstName, lastName, email, phone, country, city, license, dob }) => createReport({
//     template,
//     data: {
//         first_name: { firstName },
//         surname: { lastName },
//     },
// })

// fs.writeFileSync('report.docx', Template)
export default Template;
