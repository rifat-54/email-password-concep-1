import React, { useContext } from 'react';
import { authContex } from '../MainLoayout/MainLayout';
import { Navigate } from 'react-router-dom';

const Profile = () => {
    const{user}=useContext(authContex)
    // if(!user)
    // {
    //    return <Navigate to={'/login'}></Navigate>
    // }
    return (
        <div>
            <p> I am profile</p>
        </div>
    );
};

export default Profile;