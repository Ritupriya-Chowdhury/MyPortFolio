import { Helmet } from "react-helmet-async";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import MySkills from "../MySkills/MySkills";
import Contact from "../Contact/Contact";


const HomeLayout = () => {
    return (
        <>
        <Helmet><title>Portfolio | Home</title></Helmet>
        <div className="  bg-indigo-950">
           <Banner></Banner>
           <AboutMe></AboutMe>
           <MySkills></MySkills>
           <Contact></Contact>
        </div>
        </>
    );
};

export default HomeLayout;