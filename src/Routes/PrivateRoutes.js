import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { currentUser, loading } = useContext(AuthContext);

    const location = useLocation();
    if (loading) {
        return <div className='h-[60vh] flex items-center'><div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-600"></div></div>

    }

    if (!currentUser) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>

    }
    return children;

};

export default PrivateRoutes;