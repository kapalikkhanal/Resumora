import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import { Menu, MenuButton, MenuList, MenuDivider } from '@chakra-ui/react'
import { logout } from '@/redux/reducerSlices/userSlice';

function navBar() {
    const { isLoggedIn } = useSelector(state => state.user)
    const { userDetails } = useSelector(state => state.user)

    // console.log("Details:", { userDetails })
    const router = useRouter()
    const dispatch = useDispatch()

    // For Splash Screen 
    const pathname = usePathname()
    const isHome = pathname === "/"
    const [isLoading, setIsLoading] = useState(isHome)

    useEffect(() => {
        if (isLoading)
            return
    }, [isLoading])
    return (
        <>
            <nav>
                <div className='max-w-auto px-50 mx-auto dark:bg-gray-900 flex justify-between'>
                    <div className='flex justify-center space-x-6'>
                        {/* Logo */}
                        <div className='mx-8 p-2'>
                            <Link href={"/"}>
                                <Image src={'/resumora_logo.png'} width={'200'} height={'200'} alt='' />
                            </Link>
                        </div>

                        {/* Primary Nav Bar */}
                        <div className='text-white flex items-center space-x-5 ml-10'>
                            <a href='/' className='hover:bg-[#2f4454] py-1 px-4 rounded-md transition ease-in-out delay-50 hover:-translate-x-1 hover:scale-10'>Home</a>
                            <a href='#' className='hover:bg-[#2f4454] py-1 px-4 rounded-md transition ease-in-out delay-50 hover:-translate-x-1 hover:scale-10'>Templetes</a>
                            <a href='#' className='hover:bg-[#2f4454] py-1 px-4 rounded-md transition ease-in-out delay-50 hover:-translate-x-1 hover:scale-10'>Offers</a>
                        </div>

                        {/* Secondary Nav Bar */}
                    </div>
                    <div className='text-white flex items-center space-x-5 mx-10'>

                        {/* If Else  */}

                        {!isLoggedIn ?
                            <>
                                <Button onClick={() => router.push('/login')} className='bg-gray-900 hover:bg-[#2f4454] py-1 px-7 rounded-2xl transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-10'>Login</Button>
                                <Link href="/register" className="text-center pt-1 relative w-28 h-9 hover:bg-[#2f4454] hover:text-white focus:outline-none border-2 border-white-700 rounded-2xl transition duration-300">
                                    <span className="absolute -right-2  h-3 w-3">
                                        <span className="animate-ping absolute  -bottom-2 -left-1  inline-flex h-5 w-5 rounded-full bg-purple-400 opacity-100"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                                    </span>
                                    <span className="text-white-90">Sign Up</span>
                                </Link>
                            </>
                            :
                            <>
                                <Menu width={'0px'} height={'50px'}>
                                    <MenuButton
                                        transition='all 0.1s'
                                        borderRadius='full'
                                        borderWidth='none'
                                    >
                                        <div className='flex justify-between space-x-5 ml-10'>
                                            <div className='text-white flex items-center'>Hi, {userDetails.firstName}</div>
                                            <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ring-2 ring-gray-300 dark:ring-gray-500">
                                                <svg className="absolute w-10 h-10 text-gray-400 -left-1" focusable="flase" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                            </div>
                                        </div>
                                    </MenuButton>
                                    <MenuList bgColor={'gray.900'}>
                                        <div className='flex flex-col justify-center '>
                                            <button onClick={() => router.push('/accountDetails')} className='bg-gray-900 hover:bg-gray-800 p-2'>My Account</button>
                                            <button
                                                onClick={() => {
                                                    dispatch(logout());
                                                    router.push('/');
                                                }}
                                                className='bg-gray-900 hover:bg-gray-800 p-2'
                                            >
                                                Logout
                                            </button>

                                        </div>
                                    </MenuList>
                                </Menu>
                            </>

                        }
                        {/* {!isLoggedIn && <Button onClick={() => router.push('/login')} className='text-white hover:bg-[#2f4454] py-2 px-7 rounded-2xl transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-10'>Login</Button>} */}


                    </div>
                </div>
            </nav>
            {/* End of Navigation Bar */}
        </>
    )
}

export default navBar