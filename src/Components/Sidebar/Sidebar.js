import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ course }) => {
    const { name, id } = course;
    return (
        <aside className="w-full p-6 sm:w-60 bg-gray-900 text-gray-100">
            <nav className="space-y-8 text-sm">
                <div className="space-y-2">
                    <div className="flex flex-col space-y-1">
                        <button className="block w-full p-3 text-center rounded-xl text-white bg-red-500 hover:bg-red-600 "><Link to={`/details/${id}`}>{name}</Link></button>
                    </div>
                </div>
            </nav>
        </aside>

    );
};

export default Sidebar;