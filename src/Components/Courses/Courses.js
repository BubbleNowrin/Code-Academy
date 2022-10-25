import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCardDetails from '../CourseCardDetails/CourseCardDetails';
import Sidebar from '../Sidebar/Sidebar';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='lg:flex'>

            <div className='grid lg:grid-cols-3 mx-auto my-10 gap-4'>
                {
                    courses.map(course => <CourseCardDetails key={course.id} course={course}></CourseCardDetails>)
                }
            </div>
            <div className=''>
                {
                    courses.map(course => <Sidebar key={course.id} course={course}></Sidebar>)
                }

            </div>
        </div>
    );
};

export default Courses;