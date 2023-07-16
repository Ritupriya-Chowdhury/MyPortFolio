import { Link } from "react-router-dom";
import img1 from '../../../assets/Projects/Project3/Screenshot (152).png'
import img2 from '../../../assets/Projects/Project3/Screenshot (151).png'
import img3 from '../../../assets/Projects/Project3/Screenshot (150).png'
import img4 from '../../../assets/Projects/Project3/Screenshot (149).png'
import img5 from '../../../assets/Projects/Project3/Screenshot (148).png'
import img6 from '../../../assets/Projects/Project3/Screenshot (147).png'
import img7 from '../../../assets/Projects/Project3/Screenshot (146).png'
import img8 from '../../../assets/Projects/Project3/Screenshot (145).png'
import img9 from '../../../assets/Projects/Project3/Screenshot (144).png'
import img10 from '../../../assets/Projects/Project3/Screenshot (143).png'
import img11 from '../../../assets/Projects/Project3/Screenshot (142).png'
import img12 from '../../../assets/Projects/Project3/Screenshot (141).png'
import img13 from '../../../assets/Projects/Project3/Screenshot (140).png'


const Project3 = () => {
    return (
       
            <div className='mx-4 my-8 border-2 border-indigo-700'>
                 <h1 className="text-indigo-700 font-bold text-3xl ml-4 mt-4">SurTaal Music </h1>
                 <div className="mx-4 my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                      

                       
    
     <div className="col border-2 border-indigo-600 ">
                       <img src={img1} alt="" className='w-full h-full ' />
                  </div>
                  <div className="col border-2 border-indigo-600">
                       <img src={img2} alt="" className='w-full h-full ' />
                  </div>
                  <div className="col border-2 border-indigo-600">
                       <img src={img3} alt="" className='w-full h-full ' />
                  </div>
                  <div className="col border-2 border-indigo-600">
                       <img src={img4} alt="" className='w-full h-full ' />
                  </div>
                  <div className="col border-2 border-indigo-600">
                       <img src={img5} alt="" className='w-full h-full ' />
                  </div>
                  <div className="col border-2 border-indigo-600">
                       <img src={img6} alt="" className='w-full h-full ' />
                  </div>
                  <div className="col border-2 border-indigo-600">
                       <img src={img7} alt="" className='w-full h-full ' />
                  </div>
                  <div className="col border-2 border-indigo-600">
                       <img src={img8} alt="" className='w-full h-full ' />
                  </div>
                  <div className="col border-2 border-indigo-600">
                       <img src={img9} alt="" className='w-full h-full ' />
                  </div>
                  <div className="col border-2 border-indigo-600">
                       <img src={img10} alt="" className='w-full h-full ' />
                  </div>
                  <div className="col border-2 border-indigo-600">
                       <img src={img11} alt="" className='w-full h-full ' />
                  </div>
                  <div className="col border-2 border-indigo-600">
                       <img src={img12} alt="" className='w-full h-full ' />
                  </div>
                  <div className="col border-2 border-indigo-600">
                       <img src={img13} alt="" className='w-full h-full ' />
                  </div>
                 
                   
    
                 </div>
                 <p className="text-indigo-700 m-4 text-xl">This website is based on different kind of singing course. User can login in this site as a student or instructor. Instructor can add class and student can enroll class with paying fees. 

                 </p>
                 <div className='text-center'>
                      <Link className='btn btn-primary btn-outline m-4' to='https://thunderous-wisp-b26591.netlify.app/' >Live Host</Link>
                      <Link className='btn btn-secondary btn-outline m-4' to='https://github.com/Ritupriya-Chowdhury/SurTaal_Music_Client' >Client-Side</Link>
                      <Link className='btn btn-primary m-4' to='https://github.com/Ritupriya-Chowdhury/SurTaal_Music_Server' >Server-Side</Link>
    
                 </div>
            </div>
       );
    };
    
    
export default Project3;