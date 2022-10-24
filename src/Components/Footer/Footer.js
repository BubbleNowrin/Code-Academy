import React from 'react';
import Logo1 from '../../assets/images/logo/logo2.png'
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="px-4 py-8 bg-gray-800 dark:text-gray-400">
            <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
                        <img className="w-8 h-8 rounded-full dark:text-gray-900" src={Logo1} alt="" />
                    </div>
                    <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8 text-white">
                        <li>
                            <Link rel="noopener noreferrer" to="#">Terms of Use</Link>
                        </li>
                        <li>
                            <Link rel="noopener noreferrer" to="#">Privacy</Link>
                        </li>
                    </ul>
                </div>

                <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8 text-white ">
                    <li>
                        <Link rel="noopener noreferrer" to="#"><FaInstagram />Instagram</Link>
                    </li>
                    <li>
                        <Link rel="noopener noreferrer" to="#"><FaFacebook />FaceBook</Link>
                    </li>
                    <li>
                        <Link rel="noopener noreferrer" to="#"><FaTwitter />Twitter</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;