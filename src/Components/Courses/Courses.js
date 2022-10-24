import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCardDetails from '../CourseCardDetails/CourseCardDetails';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='grid grid-cols-3'>
            {
                courses.map(course => <CourseCardDetails key={course.id} course={course}></CourseCardDetails>)
            }
        </div>
    );
};

export default Courses;