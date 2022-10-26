import React, { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { GrDocumentPdf } from 'react-icons/gr';
import Pdf from "react-to-pdf";


const Details = () => {
    const courses = useLoaderData();

    const { name, total_enrolled, details, image, id, features, rating, price } = courses;

    const ref = React.createRef();
    return (
        <div>

            <h2 className="flex justify-center text-3xl mt-10 font-semibold  text-red-500 ml-4 mr-4">Everything you need to know about '{name}'</h2><Pdf targetRef={ref} filename="Course-details.pdf">
                {({ toPdf }) => <button onClick={toPdf} className="flex items-center mx-auto block p-3 text-center rounded-xl text-white bg-red-500 hover:bg-red-600">Download<GrDocumentPdf /></button>}
            </Pdf>
            <p className="flex justify-center text-sm mt-10 font-semibold mb-4 text-gray-500 lg:px-24 ml-4 mr-4">{details}</p>



            <section>
                <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                    <div ref={ref} className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5">
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2">
                                <p className="leading-snug">{features.one}</p>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2">
                                <p className="leading-snug">{features.two}</p>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2">
                                <p className="leading-snug">{features.three}</p>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2">
                                <p className="leading-snug font-bold">Enrolled: {total_enrolled}</p>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2">
                                <p className="leading-snug font-bold">Rating: {rating.number}</p>
                            </div>
                        </div>
                        <p className='font-bold text-2xl'>Fees: <span className='text-red-500'>{price}</span></p>
                    </div>
                    <div className="lg:w-1/2 xl:w-3/5 ">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                            <img src={image} alt="" className="rounded-lg shadow-lg  aspect-video sm:min-h-96" />
                        </div>
                    </div>
                </div>
                <div className='flex my-4 lg:mx-24'>
                    <Link to={`/checkout/${id}`}><button className="mx-auto ml-6 block p-3 text-center rounded-xl mt-4 text-white bg-red-500 hover:bg-red-600">Get Premium Access</button></Link>
                    <Link to={'/courses'}><button className="mx-auto block p-3 text-center rounded-xl mt-4 ml-4 text-white bg-red-500 hover:bg-red-600">Back to Courses</button></Link>
                </div>
            </section>
        </div>
    );
};

export default Details;