import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "./Firebase.init";
import { useEffect, useState } from "react";

const AuthProvider = ({children}) => {
    const [users, setUsers] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const signUpUser =(email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = ()=>{
        return signOut(auth)
    }
    const googleCreate =()=>{
       return signInWithPopup(auth, googleProvider)
    }
    const githubCreate =()=>{
       return signInWithPopup(auth, githubProvider)
    }
    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser)
            setUsers(currentUser)
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
        users,
    }
   
   return (
     <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
   )
};

export default AuthProvider;