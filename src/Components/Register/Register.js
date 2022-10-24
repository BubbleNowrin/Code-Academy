import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="mx-auto w-full max-w-md p-8 space-y-3 rounded-xl my-10 bg-gray-700 text-gray-100">
            <h1 className="text-2xl font-bold text-center">Register</h1>
            <form action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block dark:text-gray-400">Full Name</label>
                    <input type="name" name="name" id="name" placeholder="Full Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="photoURL" className="block dark:text-gray-400">PhotoURL</label>
                    <input type="photoURL" name="photoURL" id="photoURL" placeholder="PhotoURL" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block dark:text-gray-400">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                </div>
                <button className="block w-full p-3 text-center rounded-sm text-white bg-orange-600 hover:bg-orange-500">Register</button>
            </form>

            <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                <Link rel="noopener noreferrer" to='/login' className="underline dark:text-gray-100">Log in</Link>
            </p>
        </div>
    );
};

export default Register;