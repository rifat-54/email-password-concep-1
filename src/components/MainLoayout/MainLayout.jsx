import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../firebase.config";
import Navber from "../Navber/Navber";

export const authContex = createContext();
const MainLayout = () => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twiterProvider = new TwitterAuthProvider();

  const handleSignUpGoogle = () => {
    setLoding(true)
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };

  const handleGithub = () => {
    setLoding(true)
    signInWithPopup(auth, githubProvider).then((reslust) => {
      setUser(result.user);
    });
  };

  const handleTwiter = () => {
    setLoding(true)
    signInWithPopup(auth, twiterProvider).then((result) => {
      setUser(result.user);
    });
  };

  const handleSignInWithPassword = (email, password) => {
    setLoding(true)
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      console.log(result);
    });
  };

  const handleSignInPassword = (email, password) => {
    setLoding(true)
    signInWithEmailAndPassword(auth, email, password).then((reslust) => {});
  };

  useEffect(() => {
    console.log("user ", user);
  }, [user]);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        
      } else {
        setUser(null);
      }
      setLoding(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth).then((reslust) => {
      console.log(result);
    });
  };

  const authData = {
    handleGithub,
    handleSignUpGoogle,
    handleTwiter,
    handleSignOut,
    setUser,
    user,
    handleSignInWithPassword,
    handleSignInPassword,
    loding
  };

  return (
    <div>
      <authContex.Provider value={authData}>
        <Navber></Navber>
        <Outlet></Outlet>
      </authContex.Provider>
    </div>
  );
};

export default MainLayout;
