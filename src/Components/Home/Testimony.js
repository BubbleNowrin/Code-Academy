import React from 'react';

const Testimony = () => {
    return (
        <section className="bg-white text-gray-100">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid items-center gap-4 xl:grid-cols-5">
                    <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                        <h2 className="text-4xl font-bold text-red-600">Stories From Our Alumni</h2>
                        <p className="text-gray-600">Explore news, views and perspectives from Code Academy and your alumni community.</p>
                    </div>
                    <div className="p-6 xl:col-span-3">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md bg-gray-600">
                                    <p>For a total beginner in coding, this course was the perfect start! It was easy to understand, and easy to program (coding wit already?) Thank you so much for offering such a wonderful way to learn!</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full " />
                                        <div>
                                            <p className="text-lg font-semibold text-red-500">Murk Hopkins</p>
                                            <p className="text-sm ">Java Developer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded shadow-md bg-gray-700">
                                    <p>The course is what the name says it is, an introduction to programming, great course for any code beginner. Lecturer is doing amazing job and keeping the lectures interesting, easy and understandable</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full " />
                                        <div>
                                            <p className="text-lg font-semibold text-red-500">Laura Brehm</p>
                                            <p className="text-sm ">Student of Stanford,CSE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md bg-gray-800">
                                    <p> I do not think the skills taught here allow you to do make anything practical, but it does let give you a bit of a taste about programming and teaches you very basic programming logic. But like I said, I just don't think Scratch is an appropriate tool and I think it should remain a coding tool for kids. I believe others are better off with an introductory course on something like Python instead, which isn't that hard either.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full" />
                                        <div>
                                            <p className="text-lg font-semibold text-red-500">Tom Hanson</p>
                                            <p className="text-sm">Software Engineer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded shadow-md bg-gray-900">
                                    <p>Honestly, I think Scratch, the programming tool used here, is better left for kids. This is a great tool to give kids an idea about programming and to get them interested. For adults, however, I think this is a very, very, very basic program, which teaches just the absolute basics of coding logically and thinking logically. I do not think Scratch has any real-life applications or use.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full" />
                                        <div>
                                            <p className="text-lg font-semibold text-red-500">Bill Johnson</p>
                                            <p className="text-sm">Web Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimony;