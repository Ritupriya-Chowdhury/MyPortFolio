import { Helmet } from "react-helmet-async";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";


const HomeLayout = () => {
    return (
        <>
        <Helmet><title>Portfolio | Home</title></Helmet>
        <div className="  bg-indigo-950">
           <Banner></Banner>
           <AboutMe></AboutMe>
        </div>
        </>
    );
};

export default HomeLayout;