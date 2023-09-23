import React from 'react';
import TextEditor from './textEditor';

function ProfileSummary() {

  return (
    <>
      <div className='ml-12 mr-12 mt-4'>
        <h1 className="mb-3 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Professional Summary
        </h1>
        <p className="items-center text-sm font-normal text-gray-500 dark:text-gray-400 mb-2">Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.</p>
        <TextEditor />
      </div>
      <div className='ml-12 mr-12 mt-3'>
        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400 mb-2">Tip: write atleast 100-200 characters to increase your chances.</p>
      </div>
    </>
  );
}

export default ProfileSummary;