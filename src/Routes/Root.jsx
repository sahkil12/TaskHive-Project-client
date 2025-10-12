import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AddTask from "../Components/AddTask";
import BrowseTasks from "../Components/BrowseTasks";
import MyPostTasks from "../Components/MyPostTasks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            index: true,
            element:<Home></Home>
        },
        {
            path:'addTask',
            element:<AddTask></AddTask>
        },
        {
            path:'browseTasks',
            element:<BrowseTasks></BrowseTasks>
        },
        {
            path:'myPostTasks',
            element:<MyPostTasks></MyPostTasks>
        }
    ]
  },
]);