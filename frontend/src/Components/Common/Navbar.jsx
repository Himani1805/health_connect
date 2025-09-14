import React, { useState, useEffect } from 'react'
import { Stethoscope, Menu, CircleX, User, ChevronDown, Calendar, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [userName, setUsername] = useState("");
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    useEffect(() => {
        const storedUsername = localStorage.getItem("username")
        // setIsLogin(localStorage.getItem("username"))

        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, [])
    // console.log("islogin", userName)

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        window.location.href = "/signin";
    };

    return (
        <nav className='w-full shadow-md p-4'>
            <div className='flex justify-between items-center max-w-7xl mx-auto'>
                {/* Logo */}
                <div className='flex items-center'>
                    <Stethoscope className='font-lg mr-2 text-[#eb4452]' />
                    <Link to='/' className='text-2xl font-bold'>Health Connect</Link>
                </div>

                {/* Desktop Menu */}
                <div className='md:flex justify-evenly w-1/2 text-lg hidden'>
                    <Link className='hover:text-[#eb4452]' to="/">Home</Link>
                    <Link className='hover:text-[#eb4452]' to="/about">About</Link>
                    <Link className='hover:text-[#eb4452]' to="/departments">Departments</Link>
                    <Link className='hover:text-[#eb4452]' to="/doctors">Doctors</Link>
                    <Link className='hover:text-[#eb4452]' to="/news">News</Link>
                    <Link className='hover:text-[#eb4452]' to="/contact">Contact</Link>
                </div>

                {/* Desktop User / Sign Up (hidden on mobile) */}
                <div className="hidden md:block">
                    {userName ? (
                        <div className="relative">
                            <button
                                className='flex item-center space-x-2 text-gray-800 focus:outline-none'
                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                            >
                                <User
                                    className='text-2xl text-red-600'
                                />
                                <span className='font-medium uppercase'>{userName}</span>

                                <ChevronDown
                                    className='text-gray-500 text-sm'
                                />{" "}
                                {/* Dropdown Icon */}
                            </button>
                            {userMenuOpen && (
                                <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2'>
                                    <Link to="/appointments"
                                        className='block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center '
                                    >
                                        <Calendar
                                            className='mr-2 text-red-500'
                                        />
                                        My Appointments
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className='w-full text-left px-4 py-2 flex items-center hover:bg-gray-100'
                                    >
                                        <LogOut
                                            className='mr-2 text-red-500'
                                        />
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to='/signup'
                        // className='w/1/4 hidden md:block' 
                        >
                            <button className='border px-4 py-2 border-red-400 rounded-lg hover:bg-[#eb4452] hover:text-white'>
                                Sign Up
                            </button>
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Icon */}
                <div className='w/1/4 block md:hidden' onClick={() => setOpen(!open)} >
                    {open ? <CircleX /> : <Menu />}
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {open && (
                <div className='justify-evenly w-1/2 text-lg flex flex-col gap-4 md:hidden'>
                    <Link className='hover:text-[#eb4452] mt-4' to="/">Home</Link>
                    <Link className='hover:text-[#eb4452]' to="/about">About</Link>
                    <Link className='hover:text-[#eb4452]' to="/departments">Departments</Link>
                    <Link className='hover:text-[#eb4452]' to="/doctors">Doctors</Link>
                    <Link className='hover:text-[#eb4452]' to="/news">News</Link>
                    <Link className='hover:text-[#eb4452]' to="/contact">Contact</Link>
                    {/* <Link to='/signup'>
                        <button className='border px-4 py-2 border-red-400 rounded-lg hover:bg-[#eb4452] hover:text-white'>Sign Up</button>
                    </Link> */}

                    {userName ? (
                        <div className="flex flex-col gap-2">
                            {/* Username + ChevronDown button */}
                            {/* <div className="flex items-center gap-2 text-gray-800"> */}
                            <button
                                className='flex items-center gap-2 text-gray-800 focus:outline-none '
                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                            >
                                <User className="text-red-600" />
                                <span className="font-medium uppercase ">{userName}</span>
                                <ChevronDown
                                    className='text-gray-500 text-sm'
                                />{" "}
                            </button>
                            {/* </div> */}
                            {/* Show these only when ChevronDown is clicked */}
                            {userMenuOpen && (
                                <div className="ml-6 flex flex-col gap-2">
                                    <Link
                                        to="/appointments"
                                        className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                                    >
                                        <Calendar className="min-w-10 mr-2 text-red-500" />
                                        My Appointments
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md"
                                    >
                                        <LogOut className="text-red-500 min-w-10" />
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/signup">
                            <button className="border px-4 py-2 border-red-400 rounded-lg hover:bg-[#eb4452] hover:text-white">
                                Sign Up
                            </button>
                        </Link>
                    )}
                </div>
            )}
        </nav>
    )
}

export default Navbar;
