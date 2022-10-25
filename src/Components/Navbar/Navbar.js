import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo1 from '../../assets/images/logo/logo2.png'
import { AuthContext } from '../../Contexts/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
    const { currentUser, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }
    return (
        <div className="bg-gray-900">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link
                                to="/home"
                                aria-label="Our product"
                                title="Home"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/courses"
                                aria-label="Our product"
                                title="Courses"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/faq"
                                aria-label="Product pricing"
                                title="FAQ"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"
                                aria-label="Product pricing"
                                title="Blog"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                    <Link
                        to="/"
                        aria-label="Company"
                        title="Code Academy"
                        className="inline-flex items-center lg:mx-auto"
                    >
                        <img className='w-8 h-8 rounded-full' src={Logo1} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                            Code Academy
                        </span>
                    </Link>
                    <ul className="flex items-center hidden ml-auto space-x-8 lg:flex">
                        <li>
                            <label for="Toggle4" className="inline-flex items-center p-1 cursor-pointer bg-gray-300 text-gray-800">
                                <input id="Toggle4" type="checkbox" className="hidden peer" />
                                <span className="px-4 py-2 bg-gray-600 peer-checked:bg-gray-300">Dark</span>
                                <span className="px-4 py-2 bg-gray-300 peer-checked:bg-white">Light</span>
                            </label>
                        </li>
                        {currentUser ?
                            <>
                                {currentUser?.photoURL ?
                                    <img title={currentUser?.displayName ? currentUser?.displayName : 'No Name provided'} style={{ height: '30px' }} className='rounded-full' src={currentUser?.photoURL} alt="" />
                                    :
                                    <FaUserAlt title={currentUser?.displayName ? currentUser?.displayName : 'No Name provided'} />
                                }
                                <button onClick={handleLogOut} className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">Logout</button>
                            </>
                            :
                            <>
                                <li>
                                    <Link
                                        to="/login"
                                        aria-label="Sign in"
                                        title="Log in"
                                        className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                    >
                                        Log in
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/register"
                                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none"
                                        aria-label="Sign up"
                                        title="Register"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </>
                        }

                    </ul>
                    <div className="ml-auto lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                to="/"
                                                aria-label="Company"
                                                title="Code Academy"
                                                className="inline-flex items-center"
                                            >
                                                <img className='w-8 h-8' src={Logo1} alt="" />
                                                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                    Code Academy
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <Link
                                                    to="/home"
                                                    aria-label="Our product"
                                                    title="Home"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/courses"
                                                    aria-label="Our product"
                                                    title="Courses"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Courses
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/faq"
                                                    aria-label="Product pricing"
                                                    title="FAQ"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    FAQ
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/blog"
                                                    aria-label="Product pricing"
                                                    title="Blog"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Blog
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/login"
                                                    aria-label="Sign in"
                                                    title="Log in"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Log in
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/register"
                                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-gray-700 transition duration-200 rounded shadow-md bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none"
                                                    aria-label="Sign up"
                                                    title="Register"
                                                >
                                                    Register
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;