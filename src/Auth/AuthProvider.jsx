import { AuthContext } from "./AuthContext";

const AuthProvider = ({children}) => {

    const signUpUser =()=>{

    }

    const userInfo = {
        signUpUser,
    }
   
   return (
     <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
   )
};

export default AuthProvider;