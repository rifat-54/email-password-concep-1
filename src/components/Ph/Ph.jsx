import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { authContex } from '../MainLoayout/MainLayout';

const Ph = () => {
    const contexValue=useContext(authContex);
    console.log('from ph ',contexValue)
    return (
        <div>
            i am ph jsx
            <Outlet></Outlet>
        </div>
    );
};

export default Ph;