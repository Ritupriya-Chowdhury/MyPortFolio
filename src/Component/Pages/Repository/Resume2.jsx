import img from '../../../assets/Resume/Resume.png'

const Resume2 = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold my-8 text-indigo-700'>My Resume</h1>
            <img src={img} alt="" className='mx-auto w-8/12'/>
        </div>
    );
};

export default Resume2;