import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function Footer() {
    return (
        <div>
            {/* Footer  */}
            <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        {/* Logo */}
                        <div className='mx-8 p-2'>
                            <Link href={"/s"}>
                                <Image src={'/resumora_logo.png'} width={'180'} height={'180'} alt='' />
                            </Link>
                        </div>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline">Resumora™</a>. All Rights Reserved.</span>
                </div>
            </footer>
            {/* End of Footer  */}
        </div>
    )
}

export default Footer