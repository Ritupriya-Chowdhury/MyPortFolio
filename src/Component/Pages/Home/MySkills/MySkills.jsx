import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import {BiLogoReact,BiLogoJavascript,BiLogoTailwindCss,BiLogoNodejs,BiLogoMongodb} from 'react-icons/bi';
import { BsFiletypeHtml, BsBootstrapFill,BsFiletypeCss } from 'react-icons/bs';
import { TbBrandNextjs } from 'react-icons/tb';




const MySkills = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS library
      }, []);
    return (
        <div className="text-center text-white pb-8">
            <div className="text-center">

                <p className="text-3xl font-bold text-indigo-400">My Skills</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8 mb-16 mx-4 border-2 border-indigo-400 p-4 ">
                <div className="col card  border-2 border-indigo-400 shadow-xl" data-aos="fade-right" data-aos-duration="1000">
                    <div className="mx-auto">
                        <p className='text-blue-700 text-5xl  mt-4 '><BsFiletypeHtml/></p>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-indigo-400">HTML</h2>
                        
                    </div>
                </div>
                <div className="col card  border-2 border-indigo-400 shadow-xl" data-aos="fade-up" data-aos-duration="1000">
                    <div className="mx-auto">
                        <p className='text-blue-700 text-5xl  mt-4 '><BsFiletypeCss/></p>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-indigo-400">CSS</h2>
                        
                    </div>
                </div>
                <div className="col card  border-2 border-indigo-400 shadow-xl" data-aos="fade-left" data-aos-duration="1000">
                    <div className="mx-auto">
                        <p className='text-yellow-500 text-5xl  mt-4 '><BiLogoJavascript/></p>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-indigo-400">JavaScript</h2>
                        
                    </div>
                </div>
                <div className="col card  border-2 border-indigo-400 shadow-xl" data-aos="fade-left" data-aos-duration="1000">
                    <div className="mx-auto">
                        <p className='text-blue-400 text-5xl  mt-4 '><BiLogoReact/></p>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-indigo-400">React</h2>
                        
                    </div>
                </div>
                <div className="col card  border-2 border-indigo-400 shadow-xl" data-aos="fade-down" data-aos-duration="1000">
                <div className="mx-auto">
                        <p className='text-5xl text-slate-400 mt-4 '><TbBrandNextjs/></p>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-indigo-400">Next Js</h2>
                        
                    </div>
                </div>
                <div className="col card  border-2 border-indigo-400 shadow-xl" data-aos="fade-right" data-aos-duration="1000">
                <div className="mx-auto">
                        <p className='text-5xl text-indigo-300 mt-4 '><BsBootstrapFill/></p>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-indigo-400">Bootstrap</h2>
                        
                    </div>
                </div>
                <div className="col card  border-2 border-indigo-400 shadow-xl" data-aos="fade-right" data-aos-duration="1000">
                <div className="mx-auto">
                        <p className='text-5xl text-sky-300 mt-4 '><BiLogoTailwindCss/></p>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-indigo-400">Tailwind</h2>
                        
                    </div>
                </div>
                <div className="col card  border-2 border-indigo-400 shadow-xl" data-aos="fade-up" data-aos-duration="1000">
                <div className="mx-auto">
                        <p className='text-5xl text-green-400 mt-4 '><BiLogoNodejs/></p>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-indigo-400">NodeJs</h2>
                        
                    </div>
                </div>
                <div className="col card  border-2 border-indigo-400 shadow-xl" data-aos="fade-left" data-aos-duration="1000">
                <div className="mx-auto">
                        <p className='text-5xl text-green-400 mt-4 '><BiLogoMongodb/></p>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-indigo-400">MongoDb</h2>
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default MySkills;