import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        // console.log(name, email, password, photoURL);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(error => setError(error.message))
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        };
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e.message))

    }
    return (
        <div className="mx-auto w-full max-w-md p-8 space-y-3 rounded-xl my-10 bg-gray-700 text-gray-100">
            <h1 className="text-2xl font-bold text-center">Register</h1>
            <form onSubmit={handleOnSubmit} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block dark:text-gray-400">Full Name</label>
                    <input type="name" name="name" id="name" placeholder="Full Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="photoURL" className="block dark:text-gray-400">PhotoURL</label>
                    <input type="photoURL" name="photoURL" id="photoURL" placeholder="PhotoURL" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block dark:text-gray-400">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400" required />
                </div>
                <button className="block w-full p-3 text-center rounded-sm text-white bg-red-500 hover:bg-red-600">Register</button>
                <p className="text-xl text-center text-red-600">{error}</p>
            </form>

            <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                <Link to='/login' className="underline dark:text-gray-100">Log in</Link>
            </p>
        </div>
    );
};

export default Register;