import { Navigate } from "react-router-dom";
import useAuth from "../Auth/useAuth";
import Spinner from "../Components/Spinner";

const PrivateRoute = ({children}) => {
  const { user, loading } = useAuth()
    if(loading){ 
        return <Spinner></Spinner>
     }
    if(!user){
      return  <Navigate to={'/auth/login'}></Navigate>
    }
    return children;
};

export default PrivateRoute;