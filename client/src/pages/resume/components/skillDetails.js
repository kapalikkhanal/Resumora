
import React, { useState } from 'react';
import CustomButton from './button';
import { DeleteIcon } from '@chakra-ui/icons'

const SkillDetails = () => {
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');

    const handleAddSkill = () => {
        if (newSkill.trim() !== '') {
            setSkills([...skills, newSkill]);
            setNewSkill('');
        }
    };

    const handleRemoveSkill = (skillIndex) => {
        const updatedSkills = skills.filter((_, index) => index !== skillIndex);
        setSkills(updatedSkills);
    };

    return (
        <div className='ml-12 mr-12 mt-12'>
            <h1 className="mb-3 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Skills
            </h1>
            <p className="mb-2 flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">Add atleast 5 important skills that show you fit the position. Also, ensure that they match the key skills mentiones in the job lisiting.</p>
            <div className="flex space-x-2 mt-2 mb-2">
                {skills.map((skill, index) => (
                    <div key={index} className="flex items-center">
                        <div className="w-auto h-auto bg-[#2f4454] p-1.5 px-2.5 border border-emerald-400 rounded-lg">
                            {skill}
                        </div>
                        <button onClick={() => handleRemoveSkill(index)} className="text-red-500 hover:text-red-700">
                        <DeleteIcon w={5} h={5} color="red.500" className='ml-1'/>
                        </button>
                    </div>
                ))}
            </div>
            <div className='flex justify-between space-x-10'>
                <input
                    type="text"
                    placeholder="Add a skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    className="w-full border border-gray-900 text-gray-900 sm:text-sm rounded-lg p-3 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                />
                <CustomButton buttonName={"Add"} onClick={handleAddSkill} width={100} />
                {/* <button onClick={handleAddSkill}>Add</button> */}
            </div>

        </div>
    );
};

export default SkillDetails;
