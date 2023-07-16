import img1 from '../../../assets/Projects/Project1/Screenshot (92).png';
import img2 from '../../../assets/Projects/Project1/Screenshot (127).png';
import img3 from '../../../assets/Projects/Project1/Screenshot (128).png';
import img4 from '../../../assets/Projects/Project1/Screenshot (129).png';
import img5 from '../../../assets/Projects/Project1/Screenshot (130).png';
import img6 from '../../../assets/Projects/Project1/Screenshot (131).png';

import { Link } from 'react-router-dom';



const Project1 = () => {
     return (
          <div className='mx-4 my-8 border-2 border-orange-700'>
               <h1 className="text-orange-600 font-bold text-3xl ml-4 mt-4">Bangladeshi Foodie</h1>
               <div className="mx-4 my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col border-2 border-orange-600 ">
                         <img src={img1} alt="" className='w-full h-full ' />
                    </div>
                    <div className="col border-2 border-orange-600">
                         <img src={img2} alt="" className='w-full h-full ' />
                    </div>
                    <div className="col border-2 border-orange-600">
                         <img src={img3} alt="" className='w-full h-full ' />
                    </div>
                    <div className="col border-2 border-orange-600">
                         <img src={img4} alt="" className='w-full h-full ' />
                    </div>
                    <div className="col border-2 border-orange-600">
                         <img src={img5} alt="" className='w-full h-full ' />
                    </div>
                    <div className="col border-2 border-orange-600">
                         <img src={img6} alt="" className='w-full h-full ' />
                    </div>
                    



               </div>
               <p className="text-orange-500 m-4 text-xl">This website is based on chefs and their popular recipes. Website has home page which display some Bangladeshi chefs. One have login to see detail about chefs and their recipes .
               </p>
               <div className='text-center'>
                    <Link className='btn btn-primary btn-outline m-4' to='https://gentle-gaufre-46eb01.netlify.app/' >Live Host</Link>
                    <Link className='btn btn-secondary btn-outline m-4' to='https://github.com/Ritupriya-Chowdhury/Bangladeshi_Foodie_Client' >Client-Side</Link>
                    <Link className='btn btn-primary m-4' to='https://github.com/Ritupriya-Chowdhury/Bangladeshi_Foodie_Server' >Server-Side</Link>

               </div>
          </div>
     );
};

export default Project1;