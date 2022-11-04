import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase/FireBase.init";
import { useNavigate } from "react-router-dom";
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

// Log In With Google  
const googleLogIn =()=>{
    return signInWithPopup(auth, provider)
}

  const authInfo = {createUser, googleLogIn};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
