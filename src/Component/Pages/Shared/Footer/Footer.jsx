import { Link } from "react-router-dom";
import {AiFillHome,AiFillLinkedin,AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="mt-16">
            <footer className="footer footer-center p-10 bg-blue-950 text-primary-content">
                <div>

                    <p className="font-bold text-3xl">
                        RituPriya
                    </p>
                    <div className="text-xl md:flex">
                       <p className="mr-4">
                        <Link to='/'><p className="mt-1"><AiFillHome></AiFillHome></p></Link>
                       </p>
                       <p className="mr-4">
                        <Link to='/aboutMe'>About Me</Link>
                       </p>
                       <p className="mr-4">
                        <Link to='/resume'>Resume</Link>
                       </p>
                       <p className="mr-4">
                        <Link to='/projects'>Projects</Link>
                       </p>
                       <p className="mr-4">
                        <Link to='/contact'>Contact</Link>
                       </p>
                        
                    </div>
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4 text-3xl">
                        <p>
                            <Link to='https://web.facebook.com/ritupriya.chowdhury.5'><BsFacebook/></Link>
                        </p>
                       
                        <p>
                            <Link to='https://www.linkedin.com/in/ritupriya-chowdhury-7019a1251/'><AiFillLinkedin/></Link>
                        </p>
                       
                        <p>
                            <Link to='https://github.com/Ritupriya-Chowdhury'><AiFillGithub/></Link>
                        </p>
                       
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;