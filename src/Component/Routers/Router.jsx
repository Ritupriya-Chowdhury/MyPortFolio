import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomeLayout from "../Pages/Home/HomeLayout/HomeLayout";


 const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            path:"/",
            element:<HomeLayout></HomeLayout>
        }
    ]
  },
]);

export default router