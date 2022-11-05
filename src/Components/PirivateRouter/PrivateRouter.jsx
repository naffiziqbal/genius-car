import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Authprovider, { AuthContext } from '../../Context/Authprovider';

const PrivateRouter = ({children}) => {
    const {user,loading } = useContext(AuthContext);
    const location  = useLocation();
    if(loading){
        return <h1 className='text-5xl text-red-600'>Loading</h1>
    }
    if(user?.uid){
        return children;
    }
        return <Navigate to={'/login'} state={{from: location}}replace ></Navigate>
}

export default PrivateRouter;
