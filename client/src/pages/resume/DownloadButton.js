// components/DownloadButton.js

import React from 'react';
import { PDFDocument, rgb } from 'pdf-lib';

function displayTextWidth(text) {
    let canvas = displayTextWidth.canvas || (displayTextWidth.canvas = document.createElement("canvas"));
    let context = canvas.getContext("2d");
    let metrics = context.measureText(text);
    return metrics.width;
}

const DownloadButton = ({ firstName, lastName, email, phone, country, city, license, dob }) => {
    const generatePDF = async () => {
        // Create a new PDF document
        const pdfDoc = await PDFDocument.create();

        // Add a new page
        const page = pdfDoc.addPage([2480, 3508]);

        console.log("Text Width: " + displayTextWidth("Name: " + firstName));

        // Draw text on the page
        page.drawText(`Name: ${firstName}`, {
            x: 50,
            y: 50,
            size: 20,
            color: rgb(0, 0, 0),
        });

        page.drawText(`${lastName}`, {
            x: 50 + displayTextWidth("Name: " + firstName) + 80,
            y: 50,
            size: 20,
            color: rgb(0, 0, 0),
        });

        page.drawText(`Email: ${email}`, {
            x: 50,
            y: 80,
            size: 20,
            color: rgb(0, 0, 0),
        });

        page.drawText(`Phone Number: ${phone}`, {
            x: 50,
            y: 110,
            size: 20,
            color: rgb(0, 0, 0),
        });

        page.drawText(`Country: ${country}`, {
            x: 50,
            y: 140,
            size: 20,
            color: rgb(0, 0, 0),
        });
        page.drawText(`City: ${city}`, {
            x: 50,
            y: 170,
            size: 20,
            color: rgb(0, 0, 0),
        });
        page.drawText(`Driving License: ${license}`, {
            x: 50,
            y: 200,
            size: 20,
            color: rgb(0, 0, 0),
        });

        
        page.drawText(`Driving License: ${dob}`, {
            x: 50,
            y: 230,
            size: 20,
            color: rgb(0, 0, 0),
        });

        // Serialize the PDF to bytes
        const pdfBytes = await pdfDoc.save();

        // Create a blob from the bytes
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });

        // Create a download link and trigger the download
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'resume.pdf';
        link.click();
    };

    return (
        <div className='flex justify-center p-5'>
            <button onClick={generatePDF} className="w-1/2 text-white bg-gray-800 hover:bg-[#2f4454] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" > Download PDF </button>
        </div>
    );
};

export default DownloadButton;
