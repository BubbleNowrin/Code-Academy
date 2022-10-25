import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Details = () => {
    const courses = useLoaderData();
    // console.log(courses);
    const { name, total_enrolled, details, image, id } = courses;
    return (

        <div>
            <h2 className="text-3xl ml-48 mt-10 font-semibold dark:text-violet-400 text-red-500">Everything you need to know about '{name}' </h2>
            <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 mx-auto my-14">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <h3 className="text-xl font-semibold dark:text-violet-400 text-red-500">{name}</h3>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center text-xs">
                            <span>Enrolled: {total_enrolled}</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p className="block text-xl font-semibold dark:text-violet-400 text-red-500">
                            Details:
                        </p>
                        <p className="leading-snug dark:text-gray-400">{details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;