import React from 'react';
import { Link } from 'react-router-dom';

const CourseCardDetails = ({ course }) => {
    const { name, details, image, id, total_enrolled } = course;
    return (

        <Link to={`/details/${id}`}>
            <div data-aos="zoom-in-up" data-aos-duration="1500" className="p-6 lg:mx-6 my-4 rounded-md shadow-md bg-white text-gray-900">
                <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase text-gray-900">Enrolled:<span className='text-red-500'>{total_enrolled}</span></span>
                    <h2 className="text-xl font-semibold tracking-wide text-red-500">{name}</h2>
                </div>
                <p className="text-gray-900">{details.length > 200 ? details.slice(0, 200) + "..." : details}<span className='underline text-red-700'>Learn More</span></p>
            </div>
        </Link>

    );
};

export default CourseCardDetails;