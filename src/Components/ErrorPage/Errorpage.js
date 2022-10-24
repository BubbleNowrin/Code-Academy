import React from 'react';
import { useRouteError } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import errorPic from '../../assets/images/background/cancel.png';

const Errorpage = () => {
    const error = useRouteError();
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='h-screen flex-col text-center flex items-center justify-center'>
                <img className='w-60 h-60' src={errorPic} alt="" />
                <div>
                    <h2 className='text-red-600 font-bold'>{error.status}</h2>
                    <p className='text-red-600 text-2xl font-bold'>{error.statusText}</p>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Errorpage;