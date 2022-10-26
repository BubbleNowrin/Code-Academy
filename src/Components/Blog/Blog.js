import React from 'react';

const Blog = () => {
    return (
        <div data-aos="fade-down-right"
            className="text-white my-10">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-red-500 mb-2">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-white">Jun 10, 2020</span>
                </div>
                <div className="mt-3">
                    <p className="text-2xl font-bold underline">What is CORS?</p>
                    <p className="mt-2">Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
                </div>
            </div>
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-500 mb-2">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-white">August 23, 2021</span>
                </div>
                <div className="mt-3">
                    <p className="text-2xl font-bold underline">Why are you using firebase? What other options do you have to implement authentication?</p>
                    <p className="mt-2">Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.That's why we are using firebase. the options I have to implement authentication are :1.On this page,
                        2.Add and initialize the Authentication SDK,
                        3.(Optional) Prototype and test with Firebase Local Emulator Suite,
                        4.Sign up new users,
                        5.Sign in existing users,
                        6.Set an authentication state observer and get user data,
                        7.Next steps.</p>
                </div>
            </div>
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-red-500 mb-2">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-white">October 14, 2021</span>
                </div>
                <div className="mt-3">
                    <p className="text-2xl font-bold underline">How does the private route work?</p>
                    <p className="mt-2">The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                </div>
            </div>
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-500 mb-2">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-white">July 18, 2022</span>
                </div>
                <div className="mt-3">
                    <p className="text-2xl font-bold underline">What is Node? How does Node work?</p>
                    <p className="mt-2"> Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;