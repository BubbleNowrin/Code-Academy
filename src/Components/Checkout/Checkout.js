import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const course = useLoaderData();
    const { name } = course;
    return (
        <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Check Out
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Enroll</span>
                    </span>{' '}
                    in the Course of: <span className=' text-red-500'>{name}</span>
                </h2>

            </div>
            <div className="max-w-md lg:max-w-screen-lg sm:row-gap-10 lg:max-w-screen-lg xl:max-w-screen-lg sm:mx-auto">

                <div className="flex flex-col justify-center p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
                    <div className="text-center">
                        <div className="text-lg font-semibold">{name}</div>
                        <div className="flex items-center justify-center mt-2">
                            <div className="mr-1 text-5xl font-bold  text-red-500">$78</div>
                            <div className="text-gray-700"></div>
                        </div>
                        <div className="mt-2 space-y-3">
                            <div className="text-gray-700">25 Classes</div>
                            <div className="text-gray-700">Renowned Instructors</div>
                            <div className="text-gray-700 font-semibold">24/7 Support</div>
                        </div>
                    </div>
                    <div>
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-red-500 rounded shadow-md hover:bg-red-600 focus:shadow-outline focus:outline-none"
                        >
                            Enroll
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;