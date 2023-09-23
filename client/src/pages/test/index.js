import { readFileSync, writeFileSync } from 'fs';
import { createReport } from 'docx-templates';
import React from 'react'

const template = readFileSync('public/Templates/template.docx');

// const buffer = (firstName, surname) => await createReport({
//   template,
//   data: {
//     first_name: 'John',
//     surname: 'Appleseed',
//   },
// });

const generateBuffer = async (firstName, surname) => {
  const buffer = await createReport({
    template,
    data: {
      first_name: firstName,
      surname: surname,
    },
  });
  return buffer;
};

try {
  const buffer = await generateBuffer('Kapalik', 'Appleseed');
  writeFileSync('public/Templates/report.docx', buffer);
  console.log('Report generated and saved successfully.');
} catch (error) {
  console.error('Error generating or saving the report:', error);
}




function index() {
  return (
    <div>index</div>
  )
}

export default index