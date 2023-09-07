import { useEffect } from 'react';
import { TemplateHandler } from 'docx-templates';



export default function DocxGenerationPage() {
    useEffect(() => {
        // Create a new TemplateHandler instance
        const templateHandler = new TemplateHandler();

        // Load your Word template document
        templateHandler.loadFile('/template.docx');

        // Data to replace the placeholders in the document
        const data = {
            placeholder1: 'Replace with data 1',
            placeholder2: 'Replace with data 2',
        };

        // Generate the document with the provided data
        const generatedDoc = templateHandler.render(data);

        // Download or serve the generatedDoc as needed
        // For example, you can create a download link or display it on the page
        // ...
    }, []);

    return (
        <div>
            {/* Display or handle the generated document */}
        </div>
    );
}
