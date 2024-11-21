import React, { useContext } from 'react';
import { authContex } from '../MainLoayout/MainLayout';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loding}=useContext(authContex)
    if(loding)
    {
       return <h1>loding ...</h1>
    }
    console.log(children);
    if(!user)
    {
      return  <Navigate to={'/login'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoutes;