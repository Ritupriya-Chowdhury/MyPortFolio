import { Link } from 'react-router-dom';
import logo from '../../../../assets/Home/Banner/IMG-20221123-WA0058-removebg-preview.png'
import { AiOutlineGithub,AiFillLinkedin,AiFillFacebook } from 'react-icons/ai';

const Banner = () => {
    return (
        <div className="py-4 text-center">
                <div className="text-white text-lg  my-20">
                    <p className="mb-2">Hi, I'm</p>
                    <p className="text-3xl font-bold mb-4">RituPriya Chowdhury</p>
                    <p className=''>FullStack Developer</p>
                    <div className='border-2 rounded-lg rounded-t-full  border-indigo-400 mx-auto w-72 bg-blue-900 mt-8'><img src={logo} alt="" className="mx-auto px-8 pt-4" />
                    </div>
                    <div className='mx-auto text-blue-300 w-32 text-3xl my-8 flex border border-indigo-400 rounded-lg p-2'>
                    <p className='mr-2'><Link to='https://github.com/Ritupriya-Chowdhury'><AiOutlineGithub/></Link></p>
                    <p className='mr-2'><Link to='https://www.linkedin.com/in/ritupriya-chowdhury-7019a1251/'><AiFillLinkedin/></Link></p>
                    <p><Link to='https://web.facebook.com/ritupriya.chowdhury.5'><AiFillFacebook/></Link></p>
                </div>
                </div>
                
            </div>
    );
};

export default Banner;