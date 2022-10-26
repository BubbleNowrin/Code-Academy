import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCardDetails from '../CourseCardDetails/CourseCardDetails';



const Courses = () => {
    const courses = useLoaderData();

    return (
        <div className='lg:flex'>
            <aside className="w-full lg:w-1/5 lg:p-6 sm:w-60 lg:bg-gray-200 text-gray-100">
                <nav className="space-y-8 text-sm">
                    <div className="space-y-2">
                        <p className="w-full text-black font-semibold "><small>Total Courses: {courses.length}</small></p>
                        <div className="flex flex-col space-y-1">
                            {
                                courses.map(course => <button key={course.id} className="block w-full p-3 text-center rounded-xl text-white bg-red-500 hover:bg-red-600"><Link to={`/details/${course.id}`}>{course.name}</Link></button>)
                            }
                        </div>
                    </div>
                </nav>
            </aside>
            <div className='lg:w-4/5 w-full grid lg:grid-cols-3 sm:grid-cols-1 mx-auto my-6'>

                {
                    courses.map(course => <CourseCardDetails key={course.id} course={course}></CourseCardDetails>)
                }
            </div>

        </div>
    );
};

export default Courses;