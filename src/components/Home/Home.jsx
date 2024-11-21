import React, { useContext } from "react";
import auth from "../../firebase.config";
import { authContex } from "../MainLoayout/MainLayout";
import { Link } from "react-router-dom";

const Home = () => {
  const authValue = useContext(authContex);
//   console.log(authValue);
  const { handleGithub,handleSignOut, handleSignUpGoogle, handleTwiter } = authValue;

  return (
    <div>
      <h2>this is home</h2>
      <button className='btn space-x-4' onClick={handleSignUpGoogle}>sign up google</button>
            <button className='btn' onClick={handleGithub}>Github login</button>
            <button className='btn' onClick={handleTwiter}>Twiter login</button>
            <button className='btn' onClick={handleSignOut}>Log Out</button>
            <Link to={'/signup'}>Sign Up</Link>
            <Link to={'/login'}>Login</Link>
    </div>
  );
};

export default Home;
