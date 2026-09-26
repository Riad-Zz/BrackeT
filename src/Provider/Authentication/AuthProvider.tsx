import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup, signOut, updateProfile, type User, type UserCredential } from "firebase/auth";
import app from "@/Firebase/Firebase.config";


type UpdateUserProfileData = {
    displayName?: string | null;
    photoURL?: string | null;
};

//====================*** Context gets a type ***===========================
type AuthContextType = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    googleLogin: () => Promise<UserCredential>;
    logOut : () => Promise<void> ;
    emailRegistration : (email : string , password : string) => Promise<UserCredential> ;
    updateUserProfile: (updatedInformation: UpdateUserProfileData) => Promise<void>;
    emailLogin : (email : string , password : string) => Promise<UserCredential> ;
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

    //----------------------------*** LogOut Functionality  ***------------------------------
    const logOut = () => {
        return signOut(auth);
    }

    // ============================= *** Register With Email and Password ***=====================
    const emailRegistration = (email : string , password : string) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // ============================= *** Update a User Profile *** ==========================
    const updateUserProfile = (UpdatedInformation : UpdateUserProfileData) => {
        return updateProfile(auth.currentUser! , UpdatedInformation) 
    }

    // ============================= *** Login With Email and Password ***=====================
    const emailLogin = (email : string , password : string)=>{
        return signInWithEmailAndPassword(auth,email ,password) ;
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
        logOut,
        emailRegistration ,
        updateUserProfile ,
        emailLogin
    }

    return (
        <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;