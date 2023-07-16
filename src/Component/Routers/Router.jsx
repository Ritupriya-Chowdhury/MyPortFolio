import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomeLayout from "../Pages/Home/HomeLayout/HomeLayout";
import AboutMe from "../Pages/Home/AboutMe/AboutMe";
import MySkills from "../Pages/Home/MySkills/MySkills";
import Contact from "../Pages/Home/Contact/Contact";
import ProjectsLayout from "../Pages/Projects/ProjectsLayout";

import ResumeLayout from "../Pages/Repository/ResumeLayout";




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
          {
            path: "/mySkills",
            element: <MySkills></MySkills>
          },
          {
            path: "/contact",
            element: <Contact></Contact>
          },
        ]
      },
      
      {
        path:'/projects',
        element:<ProjectsLayout></ProjectsLayout>
      },
      {
        path:'/resume',
        element:<ResumeLayout></ResumeLayout>
      },


    ]
  },
]);

export default router