import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomeLayout from "../Pages/Home/HomeLayout/HomeLayout";
import AboutMe from "../Pages/Home/AboutMe/AboutMe";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
          {
            path: "/aboutMe",
            element: <AboutMe></AboutMe>
          },
        ]
      },


    ]
  },
]);

export default router