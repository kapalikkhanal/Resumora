import React, { useState } from 'react';
import { DeleteIcon } from '@chakra-ui/icons'
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import CustomButton from './button';
import { Icon } from "@chakra-ui/react";

const SocialMedia = () => {
    const [socialMediaLinks, setSocialMediaLinks] = useState([]);
    const [activePlatform, setActivePlatform] = useState(null);
    const [newUsername, setNewUsername] = useState('');

    const platforms = {
        facebook: 'https://www.facebook.com/',
        instagram: 'https://www.instagram.com/',
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://www.github.com/',
    };

    const handleAddPlatform = (platform) => {
        setActivePlatform(platform);
        setNewUsername('');
    };

    const handleUsernameChange = (e) => {
        setNewUsername(e.target.value);
    };

    const handleAddLink = () => {
        if (newUsername && activePlatform) {
            const newLink = platforms[activePlatform] + newUsername;
            setSocialMediaLinks([...socialMediaLinks, newLink]);
            setNewUsername('');
            setActivePlatform(null);
        }
    };

    const handleRemoveLink = (index) => {
        const updatedLinks = socialMediaLinks.filter((_, i) => i !== index);
        setSocialMediaLinks(updatedLinks);
    };

    return (
        <div className='m-12'>
            < h1 className="mb-3 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white" >
                Social Media Links
            </h1 >
            {
                Object.keys(platforms).map((platform) => (
                    <div key={platform} className="flex items-center ml-4">
                        {activePlatform === platform && (
                            <div className='flex justify-between space-x-10 mb-2 mt-2'>
                                <input
                                    type="text"
                                    placeholder={`Enter your ${platform} username`}
                                    value={newUsername}
                                    onChange={handleUsernameChange}
                                    className="w-full border border-gray-900 text-gray-900 sm:text-sm rounded-lg p-3 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                                />
                                <CustomButton buttonName={"Add"} onClick={handleAddLink} width={100} />
                            </div>
                        )}
                    </div>
                ))
            }
            <div className="flex justify-between mx-5 flex-row mt-5 mb-10"> {/* Add this container */}
                {
                    Object.keys(platforms).map((platform) => (
                        <div key={platform} className="flex items-center ml-4"> {/* Adjust margins as needed */}
                            {platform === "facebook" && (
                                <>
                                    <Icon
                                        as={BsFacebook}
                                        w={6} h={6} />
                                </>
                            )}
                            {platform === "instagram" && (
                                <Icon as={BsInstagram} w={6} h={6} />
                            )}
                            {platform === "linkedin" && (
                                <Icon as={BsLinkedin} w={6} h={6} />
                            )}
                            {platform === "github" && (
                                <Icon as={BsGithub} w={6} h={6} />
                            )}

                            <button onClick={() => handleAddPlatform(platform)} className="ml-2">
                                {platform.charAt(0).toUpperCase() + platform.slice(1)}
                            </button>
                        </div>
                    ))
                }
            </div>
            < ul className="space-y-2">
                {
                    socialMediaLinks.map((link, index) => (
                        <li key={index} className="flex items-center">
                            <a href={link} target="_blank" rel="noopener noreferrer" className="w-auto h-auto bg-[#2f4454] p-1.5 px-2.5 border border-emerald-400 rounded-lg">
                                {link}
                            </a>
                            <button onClick={() => handleRemoveLink(index)} className="text-red-500 hover:text-red-700">
                                <DeleteIcon w={5} h={5} color="red.500" className='ml-1' />
                            </button>
                        </li>
                    ))
                }
            </ul >

        </div >
    );
};

export default SocialMedia;
