import { Helmet } from "react-helmet-async";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";


const ProjectsLayout = () => {
    return (
        <>
        <Helmet>Portfolio | Projects</Helmet>
        <div className='pt-16'>
            <Project1></Project1>
            <Project2></Project2>
            <Project3></Project3>
        </div>
        </>
    );
};

export default ProjectsLayout;