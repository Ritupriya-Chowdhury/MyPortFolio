import { Link } from "react-router-dom";
import img1 from '../../../assets/Projects/Project2/Screenshot (127).png';
import img2 from '../../../assets/Projects/Project2/Screenshot (142).png';
import img3 from '../../../assets/Projects/Project2/Screenshot (143).png';
import img4 from '../../../assets/Projects/Project2/Screenshot (144).png';
import img5 from '../../../assets/Projects/Project2/Screenshot (145).png';
import img6 from '../../../assets/Projects/Project2/Screenshot (146).png';
import img7 from '../../../assets/Projects/Project2/Screenshot (148).png';
import img8 from '../../../assets/Projects/Project2/Screenshot (149).png';
import img9 from '../../../assets/Projects/Project2/Screenshot (150).png';
import img10 from '../../../assets/Projects/Project2/Screenshot (141).png';
import img11 from '../../../assets/Projects/Project2/Screenshot (126).png';
import img12 from '../../../assets/Projects/Project2/Screenshot (125).png';
import img13 from '../../../assets/Projects/Project2/Screenshot (124).png';
import img14 from '../../../assets/Projects/Project2/Screenshot (123).png';
import img15 from '../../../assets/Projects/Project2/Screenshot (122).png';
import img16 from '../../../assets/Projects/Project2/Screenshot (121).png';
import img17 from '../../../assets/Projects/Project2/Screenshot (120).png';

const Project2 = () => {
    return (
        <div className='mx-4 my-8 border-2 border-indigo-700'>
             <h1 className="text-indigo-500 font-bold text-3xl ml-4 mt-4">Japanese Manga Anime Toy Shop </h1>
             <div className="mx-4 my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              

<div className="col border-2 border-indigo-600 ">
                           <img src={img1} alt="" className='w-full h-full ' />
                      </div>
                      
                      <div className="col border-2 border-indigo-600">
                           <img src={img9} alt="" className='w-full h-full ' />
                      </div>
                      <div className="col border-2 border-indigo-600">
                           <img src={img8} alt="" className='w-full h-full ' />
                      </div>
                      <div className="col border-2 border-indigo-600">
                           <img src={img7} alt="" className='w-full h-full ' />
                      </div>
                      <div className="col border-2 border-indigo-600">
                           <img src={img6} alt="" className='w-full h-full ' />
                      </div>
                      <div className="col border-2 border-indigo-600">
                           <img src={img5} alt="" className='w-full h-full ' />
                      </div>
                      <div className="col border-2 border-indigo-600">
                           <img src={img4} alt="" className='w-full h-full ' />
                      </div>
                      <div className="col border-2 border-indigo-600">
                           <img src={img3} alt="" className='w-full h-full ' />
                      </div>
                      <div className="col border-2 border-indigo-600">
                           <img src={img2} alt="" className='w-full h-full ' />
                      </div>
                      <div className="col border-2 border-indigo-600">
                           <img src={img10} alt="" className='w-full h-full ' />
                      </div>
                      <div className="col border-2 border-indigo-600">
                           <img src={img11} alt="" className='w-full h-full ' />
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
                      <div className="col border-2 border-indigo-600">
                           <img src={img14} alt="" className='w-full h-full ' />
                      </div>
                      <div className="col border-2 border-indigo-600">
                           <img src={img15} alt="" className='w-full h-full ' />
                      </div>
                      <div className="col border-2 border-indigo-600">
                           <img src={img16} alt="" className='w-full h-full ' />
                      </div>
                      <div className="col border-2 border-indigo-600">
                           <img src={img17} alt="" className='w-full h-full ' />
                      </div>

             </div>
             <p className="text-indigo-500 m-4 text-xl">This website mainly based or buy and sell toy. User can add toy which he want to sell.
             </p>
             <div className='text-center'>
                  <Link className='btn btn-primary btn-outline m-4' to='https://glittery-clafoutis-4c5a22.netlify.app/' >Live Host</Link>
                  <Link className='btn btn-secondary btn-outline m-4' to='https://github.com/Ritupriya-Chowdhury/Toy_Shop_Client' >Client-Side</Link>
                  <Link className='btn btn-primary m-4' to='https://github.com/Ritupriya-Chowdhury/Toy_Shop_Server' >Server-Side</Link>

             </div>
        </div>
   );
};

export default Project2;