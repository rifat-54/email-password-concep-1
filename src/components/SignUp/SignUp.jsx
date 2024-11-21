import React, { useContext } from 'react';
import { authContex } from '../MainLoayout/MainLayout';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const{handleSignInWithPassword}=useContext(authContex)

    const handleSubmit=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        const confirmPasswor=e.target.confirmpassword.value;
        // console.log(email,password,confirmPasswor)
        if(password.length<6)
        {
            alert('password must be more than 6 characters')
            return;
        }
        if(password!=confirmPasswor)
        {
            alert("password don't mactched")
            return;
        }
       const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
       if(!pattern.test(password)){
          alert('passwod invalid try with valid password')
          return;
       }
        handleSignInWithPassword(email,password)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                email: <input name='email' type="email"  placeholder='email'/>
                <br />
                password: <input name='password' type="password" placeholder='password' />
                <br />
                confirm password: <input name='confirmpassword' type="password" placeholder='confirm password' />
                <br />
                <button type='submit'>Sign up</button>
            </form>
            <Link to={'/'}>Home</Link>
        </div>
    );
};

export default SignUp;