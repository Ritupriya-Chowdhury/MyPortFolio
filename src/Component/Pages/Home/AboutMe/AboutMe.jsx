import 'aos/dist/aos.css';
import AOS from 'aos';
import pic from '../../../../assets/Home/AboutMe/PXL_20230525_052233773-removebg-preview1.png'
import { useEffect } from 'react';
import { Fade } from "react-awesome-reveal";

const AboutMe = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <div className="text-center text-white pb-8">
      <div className="text-center">
        <p className="mb-2 text-lg">Get To Know</p>
        <p className="text-3xl font-bold text-indigo-400">About Me</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8 mb-16 border-2 border-indigo-400 mx-4">
        <div className="col my-4">

          <div className='border-2 border-indigo-400  bg-blue-900 mx-auto md:ml-8 lg:ml-32 w-96 ' data-aos="fade-left" data-aos-duration="1000">
            <img src={pic} alt="" className='mx-auto' />
          </div>


        </div>
        <div className="col mx-8 md:mr-12">
          <div className='text-white mb-4 md:my-8 text-xl'>

          <Fade delay={1e3} cascade damping={1e-1}>
             <p className='text-justify'>My name is Ritupriya Chowdhury.I&apos;m from Chattogarm. I&apos;m a student and currently I&apos;m studying CSEComputer Science & Engineering in a private university. I have learned and practiced Web Software/ApplicationDevelopment. And I&apos;m currently seeking an internship or junior web Software/Application developer/support job. I&apos;m a quick learner and I love to learn and apply new things. I always enjoy teamwork.
              </p> 
            </Fade>

          </div>
        </div>

      </div>

    </div>
  );
};

export default AboutMe;