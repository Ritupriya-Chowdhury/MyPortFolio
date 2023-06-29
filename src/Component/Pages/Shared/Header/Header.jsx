import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const Header = () => {
    return (
        <div>
            <div className="navbar bg-transparent fixed">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-primary btn-outline lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-blue-800 text-xl font-bold">
                            <li><Link to='/'><AiFillHome/></Link></li>
                            <li tabIndex={0}>
                                <Link to='/resume'>Resume</Link>
                            </li>
                            <li><Link to='/projects'>Projects</Link></li>
                        </ul>
                    </div>
                    <p className="italic font-bold text-2xl ml-4"><span className="text-blue-700">M</span><span className="text-red-600">y</span> <span className="text-orange-700">P</span><span className="text-blue-700">or</span><span className="text-orange-700">t</span><span className="text-red-600">fo</span><span className="text-blue-700">li</span><span className="text-orange-700">o</span></p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-blue-800 text-xl font-bold">
                        <li><Link to='/'><p className="mt-1"><AiFillHome/></p></Link></li>
                        <li tabIndex={0}>
                            <Link to='/resume'>Resume</Link>
                        </li>
                        <li><Link to='/projects'>Projects</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary btn-outline">Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Header;