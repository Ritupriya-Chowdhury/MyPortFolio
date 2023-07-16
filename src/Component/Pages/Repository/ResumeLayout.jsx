import { Helmet } from 'react-helmet-async';
import Resume from './Resume';



const ResumeLayout = () => {

   return (
        <>
        <Helmet><title>Portfolio | Resume</title></Helmet>
        <div className='pt-16'>
          <Resume></Resume>
        </div>
        </>
    );
};

export default ResumeLayout;