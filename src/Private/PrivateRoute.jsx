import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Auth/useAuth";
import Spinner from "../Components/Spinner";

const PrivateRoute = ({children}) => {
  const { user, loading } = useAuth()
  const location = useLocation();
    if(loading){ 
        return <Spinner></Spinner>
     }
    if(!user){
      return  <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    }
    return children;
};

export default PrivateRoute;