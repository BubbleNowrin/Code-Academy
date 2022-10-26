import React from 'react';

const FAQ = () => {
    return (
        <section>
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="divide-y divide-gray-700">
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5 text-red-500">
                            How long does it take to finish?</h3>
                        <p className="md:pl-0 md:col-span-7">
                            This will ultimately depend on the user, but you can expect approximately 10 hours before completion.</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5 text-red-500">How soon can I start using my coding learnings?</h3>
                        <p className="md:pl-0 md:col-span-7">
                            It's not uncommon for Code Academy learners to use their skill  within 6 months. You can find how and read more in-depth success stories in the community forums.</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5 text-red-500">
                            What if I don't have a related degree?</h3>
                        <p className="md:pl-0 md:col-span-7">
                            Having a degree related to STEM (Science, Technology, Engineering, Mathematics) helps, but it is not an absolute requirement in most coding fields. In fact, the number of developers with an unrelated undergraduate degree continues to grow so it's no longer necessary to have a STEM degree to start a career in coding.



                            However, to enter and succeed in the coding field without a related degree, it is important to make sure you learn all the important concepts that would have been covered in the degree and are required for the job. In addition, it can be helpful to make projects, contribute to open source projects, join hackathons, and network with others in the field.</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5 text-red-500">What will we learn?</h3>
                        <p className="md:pl-0 md:col-span-7">This 10-hour* Career Path covers all the basics so you know what's right for you.
                            1. Code Foundations: Introduction 2. Learn How to Code 3.Different Programming Languages 4.Web Development</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;