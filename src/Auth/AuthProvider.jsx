import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "./Firebase.init";
import { useEffect, useState } from "react";

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // providers    
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const signUpUser =(email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password)=>{
        setLoading(true)    
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = ()=>{
        return signOut(auth)
    }
    const googleCreate =()=>{
        setLoading(true)
       return signInWithPopup(auth, googleProvider)
    }
    const githubCreate =()=>{
        setLoading(true)    
       return signInWithPopup(auth, githubProvider)
    }
    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser, profile)
    }   
    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)   
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const userInfo = {
        signUpUser,
        googleCreate,
        githubCreate,
        loginUser,
        logOutUser,
        user,
        loading,
        updateUserProfile,
    }
   
   return (
     <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
   )
};

export default AuthProvider;