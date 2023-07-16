import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { TbBrandGmail } from 'react-icons/tb';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';


const Contact = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS library
      }, []);


    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fswvmfu', 'template_p66x5hz', form.current, 'VD4LPLAA1TrH-o8pP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row " >
                <div className="text-center lg:text-left" data-aos="fade-right" data-aos-duration="900">
                    <div className="card w-96 border-2 border-indigo-400 ">
                        <div className="card-body">
                            <h2 className="card-title text-3xl text-red-600"><TbBrandGmail/></h2>
                            <p className='text-indigo-400'>ritupriyabgc@gmail.com</p>
                           
                        </div>
                    </div>
                    <div className="card w-96 border-2 border-indigo-400  mt-4">
                        <div className="card-body">
                            <h2 className="card-title text-3xl text-green-400"><AiOutlineWhatsApp/></h2>
                            <p className='text-indigo-400'>+880-6215-79052</p>
                           
                        </div>
                    </div>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border-2 border-indigo-400"  data-aos="fade-left" data-aos-duration="1000" >
                    <div className="text-center mt-4 ">
                        <h1 className="text-2xl font-bold text-indigo-200">Send Mail!</h1>

                    </div>
                    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl " ref={form} onSubmit={sendEmail}>
                        <div className="card-body">
                            <label className="label text-indigo-400">
                                <span className="label-text text-indigo-400 text-xl">Name</span>
                            </label>
                            <input type="text" name="from_name" className="input input-bordered bg-indigo-200 " />
                            <label className="label">
                                <span className="label-text text-indigo-400 text-xl">Email</span>
                            </label>
                            <input type="email" name="from_email" className="input input-bordered bg-indigo-200 " />
                            <label className="label">
                                <span className="label-text text-indigo-400 text-xl">Message</span>
                            </label>
                            <textarea name="message" className="input input-bordered bg-indigo-200 " />
                            <input type="submit" value="Send" className="btn btn-primary mt-4" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;