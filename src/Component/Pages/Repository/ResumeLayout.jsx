import { Helmet } from 'react-helmet-async';
import Resume2 from './Resume2';



const ResumeLayout = () => {

   return (
        <>
        <Helmet><title>Portfolio | Resume</title></Helmet>
        <div className='pt-16'>
          <Resume2></Resume2>
        </div>
        </>
    );
};

export default ResumeLayout;