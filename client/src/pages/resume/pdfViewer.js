// components/PdfViewer.js
import React, { useEffect, useState } from 'react';

const PdfViewer = ({ formData }) => {
    const [pdfUrl, setPdfUrl] = useState('');

    const generatePdf = async () => {
        try {
            const response = await fetch('/api/generate-pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                setPdfUrl(url);
            } else {
                console.error('PDF generation failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        generatePdf(); // Initially generate the PDF
    }, [formData]);

    return (
        <div>
            <h2>PDF Viewer</h2>
            <button onClick={generatePdf}>Change PDF</button>
            <iframe src={pdfUrl} width="100%" height="400px" />
        </div>
    );
};

export default PdfViewer;
