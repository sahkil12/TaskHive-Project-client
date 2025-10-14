import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AddTask from "../Components/AddTask";
import BrowseTasks from "../Components/BrowseTasks";
import MyPostTasks from "../Components/MyPostTasks";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Auth from "../Auth/Auth";
import PrivateRoute from "../Private/PrivateRoute";
import ErrorPage from "../Components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            element:<Home></Home>
        },
        {
            path:'addTask',
            element:<PrivateRoute><AddTask></AddTask></PrivateRoute>,
        },
        {
            path:'browseTasks',
            element:<BrowseTasks></BrowseTasks>
        },
        {
            path:'myPostTasks',
            element:<PrivateRoute><MyPostTasks></MyPostTasks></PrivateRoute>
        },
    ]
  },
  {
    path:'/auth',
    element:<Auth></Auth>,
    children:[
         {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'signup',
            element:<SignUp></SignUp>
        }
    ]
  }
]);