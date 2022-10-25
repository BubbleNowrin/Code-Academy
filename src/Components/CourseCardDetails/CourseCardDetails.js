import React from 'react';
import { Link } from 'react-router-dom';

const CourseCardDetails = ({ course }) => {
    const { name, details, image, id, total_enrolled } = course;
    return (

        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Enrolled:{total_enrolled}</span>
                <h2 className="text-xl font-semibold tracking-wide text-red-500">{name}</h2>
            </div>
            <p className="dark:text-gray-100">{details.length > 100 ? details.slice(0, 100) + "..." : details}<Link className='underline text-blue-900' to={`/details/${id}`}>Learn More</Link></p>
        </div>

    );
};

export default CourseCardDetails;