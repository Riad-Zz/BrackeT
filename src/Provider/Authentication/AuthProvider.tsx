import React, { createContext, useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, type User, type UserCredential } from "firebase/auth";
import app from "@/Firebase/Firebase.config";


//====================*** Context gets a type ***===========================
type AuthContextType = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    googleLogin: () => Promise<UserCredential>;
};


export const AuthContext = createContext<AuthContextType | null>(null) ;
const auth = getAuth(app) ;
const googleProvider = new GoogleAuthProvider() ;


const AuthProvider = ({children} : {children: React.ReactNode}) =>{
    const [user , setUser] = useState<User | null>(null) 
    const [loading , setLoading] = useState(true)


    // ======================*** Register or Login with google Account ***=======================
    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider) ;
    }


    // =======================*** Observer to keep logged in a user ***========================
    useEffect(()=>{
        const tracking = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser) ;
            setLoading(false) ;
        });
        return () => {
            tracking() ;
        }
    },[])


    // ====================*** Auth Data to globally share data across the website ***=========================
    const AuthData = {
        user ,
        setUser ,
        loading,
        setLoading ,
        googleLogin ,
    }

    return (
        <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;