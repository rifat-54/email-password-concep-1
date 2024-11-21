import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContex } from '../MainLoayout/MainLayout';

const Login = () => {
    const{handleSignInPassword}=useContext(authContex)
    const handleSubmit=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        // console.log(email,password,confirmPasswor)
        handleSignInPassword(email,password)

    }
    return (
        <div>
             <form onSubmit={handleSubmit} action="">
                email: <input name='email' type="email"  placeholder='email'/>
                <br />
                password: <input name='password' type="password" placeholder='password' />
                <br />
               
                <button type='submit'>Login</button>
                <Link to={'/'}>Home</Link>
            </form>
        </div>
    );
};

export default Login;