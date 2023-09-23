import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

function TextEditor() {
    const [value, setValue] = useState('');
    const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

    return (
        <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className='mt-3'
        />
    );
}

export default TextEditor;