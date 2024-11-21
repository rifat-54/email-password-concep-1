import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { authContex } from '../MainLoayout/MainLayout';

const About = () => {
    const{handleSignUpGoogle,user}=useContext(authContex)
    return (
        <div>
            {user?.displayName}
            <p>{user?.email}</p>
            <button onClick={handleSignUpGoogle}>sign in with google</button>
            <h2>about</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default About;