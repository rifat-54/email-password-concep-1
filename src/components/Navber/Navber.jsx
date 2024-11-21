import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { authContex } from '../MainLoayout/MainLayout';

const Navber = () => {
    const{handleSignOut}=useContext(authContex)
    return (
        <div className='space-x-5 my-5'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/signup'}>Signup</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/profile'}>Profile</NavLink>
            <NavLink to={'/statis'}>Statis</NavLink>
            <button onClick={handleSignOut}>Sign Out</button>

        </div>
    );
};

export default Navber;