import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../Firebase/FireBase.init";
import { useNavigate } from "react-router-dom";
import { current } from "daisyui/src/colors";
const provider = new GoogleAuthProvider();

export const AuthContext = createContext();
 const auth = getAuth(app);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false)

//   Create User With Email And Password  
const createUser = ( email, password) =>{
 return createUserWithEmailAndPassword(auth, email, password)
}

const login= (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

// Log In With Google  
const googleLogIn =()=>{
    return signInWithPopup(auth, provider)
}

useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser);
    setLoading(false)
  })
  return ()=> unsubscribe()
},[])

  const authInfo = {user,loading,createUser, googleLogIn, login};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
