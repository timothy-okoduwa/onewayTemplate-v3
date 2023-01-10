import React, { useRef } from 'react'
import './Newsletter.css'
import Typewriter from "typewriter-effect";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Newsletter = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sfypikm', 'template_mwwn9om', form.current, 'opXca3zh-s4K59SO1')
      .then((result) => {
        toast.success('😄 we have recieved your email!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }, (error) => {
        toast.error('😌 Something went wrong ,please try again!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    e.target.reset()
  };


  return (
    <div style={{ backgroundColor: 'black', paddingBottom: '50px', paddingTop: '200px' }}>
      <div className="container ">
        <div className='bks'>
          <div className="container p-4">
            <div className='be'>Be the first to know when</div>
            <div className='be'>

              <Typewriter
                options={{

                  loop: true,
                }}
                onInit={(typewriter) => {



                  typewriter

                    .typeString(" we get BNXN as ambaxador ")

                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("we get 100,000 active users ")

                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("we partner with google ")

                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("we get more Sponsors .. ")
                    .start();
                }}
              />

            </div>
            <div className='be'>by giving us your email:</div>

            <form className='borderr' ref={form} onSubmit={sendEmail}>

              <input type="text" className='news' placeholder='Enter email address' name='user_email' required />
              <button className='btn  bruh' type='submit' >send</button>
              <ToastContainer />

            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
