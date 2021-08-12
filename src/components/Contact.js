import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Trans } from "react-i18next";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleMessage = (event) => {
    setMessage(event.target.value)
  }

  const cancelMessage = () => {
    setName('')
    setEmail('')
    setMessage('')
    document.getElementById('popup').className = 'hidden'
  }

  const sendMessage = (e) => {
    e.preventDefault()
    
    if (e.target.name.value === '') {
      document.getElementById('warning').innerHTML = 'Please enter your name!'
    } else if (e.target.email.value === '') {
      document.getElementById('warning').innerHTML = 'Please enter a valid email!'
    } else if (e.target.message.value === '') {
      document.getElementById('warning').innerHTML = 'Please enter a message!'
    } else {
      emailjs.sendForm('service_a0zmvow', 'template_qcb4862', e.target, 'user_p3Rw2pTzx5zAR1hePJpiM')
      document.getElementById('popup').className = 'hidden'
    }
  }

  const handleMessagePopup = () => {
    const popUp = document.getElementById('popup')
    if (popUp.className.includes('hidden')) {
      popUp.className = 'flex justify-center bg-gray-200 fixed z-10 inset-0 overflow-y-auto opacity-100'
    } else {
      popUp.className = 'hidden'
    }
  }

  return (
    <div id="contact">
      <div className="flex flex-col text-center h-auto">
        <div className="m-16 text-sm">
          <p className="text-xl font-bold">
            <Trans i18nKey="contact.heading">Contacts</Trans>
          </p>
          <p className="mt-4">
            <Trans i18nKey="contact.text">
              Want to know more or just chat? <br />
              You are Welcome
            </Trans>
          </p>
          <button className="mt-4 border-2 border-black hover:bg-black hover:text-white" onClick={() => handleMessagePopup()}>
            <div className="m-3">
              <Trans i18nKey="contact.button">Send Message</Trans>
            </div>
          </button>
          <form id='popup' className='hidden' onSubmit={sendMessage}>
            <div className='bg-white lg:mt-32 lg:mb-32 w-auto opacity-100 shadow bg-black'>
              <div className='m-60 flex flex-col'>
                <h1 className='text-left text-2xl font-bold moto:text-xl'>Send Message</h1>
                <div className=''>
                  <input type='text' name='name' className='border-2 border-black mt-4 py-3 px-2' placeholder='Name' value={name} onChange={handleName} />
                  <input type='text' name='email' className='border-2 border-black mt-4 py-3 px-6 ml-5' placeholder='Email' value={email} onChange={handleEmail} />
                </div>
                <textarea className='border-2 border-black mt-4 py-8 px-3' name='message' placeholder='Your message' value={message} onChange={handleMessage}/>

                <div className='flex justify-between'>
                  <button className='mt-4 border-2 bg-black text-white border-black hover:bg-white hover:text-black' onClick={() => cancelMessage()}>
                    <div className="m-3">
                      <Trans i18nKey="contact.cancel">Cancel</Trans>
                    </div>
                  </button>
                  <input 
                    type='submit' 
                    className='mt-4 border-2 bg-black text-white border-black hover:bg-white hover:text-black w-32' 
                    value='Send Message' />
                </div>
                <p id='warning' className='text-left mt-4 text-red-500'></p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center mb-16 md:justify-center md:flex-row">
        <div>
          <a
            href="https://www.linkedin.com/in/jimntare/"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className='w-10'>
              <path d="m437 0h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75h362c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75zm45 437c0 24.8125-20.1875 45-45 45h-362c-24.8125 0-45-20.1875-45-45v-362c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45zm0 0" />
              <path d="m91 422h90v-212h-90zm30-182h30v152h-30zm0 0" />
              <path d="m331.085938 210c-.027344 0-.058594 0-.085938 0-10.371094 0-20.472656 1.734375-30 5.101562v-5.101562h-90v212h90v-107c0-8.269531 6.730469-15 15-15s15 6.730469 15 15v107h90v-117.3125c0-48.546875-39.382812-94.640625-89.914062-94.6875zm59.914062 182h-30v-77c0-24.8125-20.1875-45-45-45s-44.996094 20.1875-45 44.996094v77.003906h-30v-152h30v30.019531l24.007812-18.03125c10.441407-7.84375 22.886719-11.988281 35.992188-11.988281h.058594c31.929687.03125 59.941406 30.257812 59.941406 64.6875zm0 0" />
              <path d="m91 180h90v-90h-90zm30-60h30v30h-30zm0 0" />
            </svg>
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/jim.ntare/"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className='w-10'>
              <path d="m75 512h362c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75zm-45-437c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45v362c0 24.8125-20.1875 45-45 45h-362c-24.8125 0-45-20.1875-45-45zm0 0" />
              <path d="m256 391c74.4375 0 135-60.5625 135-135s-60.5625-135-135-135-135 60.5625-135 135 60.5625 135 135 135zm0-240c57.898438 0 105 47.101562 105 105s-47.101562 105-105 105-105-47.101562-105-105 47.101562-105 105-105zm0 0" />
              <path d="m406 151c24.8125 0 45-20.1875 45-45s-20.1875-45-45-45-45 20.1875-45 45 20.1875 45 45 45zm0-60c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0" />
            </svg>
          </a>
        </div>
        <div>
          <a
            href="https://twitter.com/JimNtare"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              viewBox="0 -47 512.00004 512"
              xmlns="http://www.w3.org/2000/svg"
              className='w-10'
            >
              <path d="m512 55.964844c-32.207031 1.484375-31.503906 1.363281-35.144531 1.667968l19.074219-54.472656s-59.539063 21.902344-74.632813 25.820313c-39.640625-35.628907-98.5625-37.203125-140.6875-11.3125-34.496094 21.207031-53.011719 57.625-46.835937 100.191406-67.136719-9.316406-123.703126-41.140625-168.363282-94.789063l-14.125-16.964843-10.554687 19.382812c-13.339844 24.492188-17.769531 52.496094-12.476563 78.851563 2.171875 10.8125 5.863282 21.125 10.976563 30.78125l-12.117188-4.695313-1.4375 20.246094c-1.457031 20.566406 5.390625 44.574219 18.320313 64.214844 3.640625 5.53125 8.328125 11.605469 14.269531 17.597656l-6.261719-.960937 7.640625 23.199218c10.042969 30.480469 30.902344 54.0625 57.972657 67.171875-27.035157 11.472657-48.875 18.792969-84.773438 30.601563l-32.84375 10.796875 30.335938 16.585937c11.566406 6.324219 52.4375 27.445313 92.820312 33.78125 89.765625 14.078125 190.832031 2.613282 258.871094-58.664062 57.308594-51.613282 76.113281-125.03125 72.207031-201.433594-.589844-11.566406 2.578125-22.605469 8.921875-31.078125 12.707031-16.964844 48.765625-66.40625 48.84375-66.519531zm-72.832031 48.550781c-10.535157 14.066406-15.8125 32.03125-14.867188 50.578125 3.941407 77.066406-17.027343 136.832031-62.328125 177.628906-52.917968 47.660156-138.273437 66.367188-234.171875 51.324219-17.367187-2.722656-35.316406-8.820313-50.171875-14.910156 30.097656-10.355469 53.339844-19.585938 90.875-37.351563l52.398438-24.800781-57.851563-3.703125c-27.710937-1.773438-50.785156-15.203125-64.96875-37.007812 7.53125-.4375 14.792969-1.65625 22.023438-3.671876l55.175781-15.367187-55.636719-13.625c-27.035156-6.621094-42.445312-22.796875-50.613281-35.203125-5.363281-8.152344-8.867188-16.503906-10.96875-24.203125 5.578125 1.496094 12.082031 2.5625 22.570312 3.601563l51.496094 5.09375-40.800781-31.828126c-29.398437-22.929687-41.179687-57.378906-32.542969-90.496093 91.75 95.164062 199.476563 88.011719 210.320313 90.527343-2.386719-23.183593-2.449219-23.238281-3.074219-25.445312-13.886719-49.089844 16.546875-74.015625 30.273438-82.453125 28.671874-17.621094 74.183593-20.277344 105.707031 8.753906 6.808593 6.265625 16.015625 8.730469 24.632812 6.589844 7.734375-1.921875 14.082031-3.957031 20.296875-6.171875l-12.9375 36.945312 16.515625.011719c-3.117187 4.179688-6.855469 9.183594-11.351562 15.183594zm0 0" />
            </svg>
          </a>
        </div>
        <div>
          <a href="https://github.com/Ntare22" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className='w-10'>
              <path d="m256 0c-140.699219 0-256 116.300781-256 257 0 139.882812 114.25 255 256 255 141.574219 0 256-114.945312 256-255 0-140.699219-115.300781-257-256-257zm45 477.5c-14.398438 3-29.699219 4.5-45 4.5s-30.601562-1.5-45-4.5v-70.199219c0-16.800781 4.5-22.800781 10.5-30.902343 3.054688-3.492188 4.898438-6.625 18.597656-27.296876l-23.097656-3.601562c-59.402344-8.699219-82.800781-39.601562-92.101562-63.601562-12-32.097657-5.699219-72.300782 15.902343-97.796876 3.300781-3.902343 6-10.503906 3.601563-17.402343-4.503906-13.800781-3.902344-35.699219-.902344-44.101563 15.90625 2.273438 32.261719 13.667969 45.902344 21.902344 6.285156 3.667969 9.582031 2.699219 12.597656 3 10.960938-2.28125 28.058594-7.800781 54.300781-7.800781 16.199219 0 33.300781 2.398437 50.101563 7.199219 3.003906-.070313 7.832031 2.484374 16.199218-2.398438 14.257813-8.6875 30.058594-19.691406 45.898438-21.902344 3 8.402344 3.601562 30.300782-.898438 44.101563-2.402343 6.898437.296876 13.5 3.601563 17.402343 21.597656 25.5 27.898437 65.699219 15.898437 97.796876-9.300781 24-32.699218 54.902343-92.101562 63.601562l-23.097656 3.601562c14.160156 21.367188 15.652344 23.929688 18.601562 27.296876 5.996094 8.101562 10.496094 14.101562 10.496094 30.902343zm30-8.699219v-61.5c0-17.101562-3.601562-28.5-8.402344-36.902343 45.601563-12.296876 78.003906-39.300782 92.402344-78 15.300781-40.796876 8.402344-89.398438-17.101562-123 4.503906-20.097657 4.503906-52.199219-6.296876-67.199219-4.800781-6.597657-11.402343-10.199219-19.800781-10.199219-.300781 0-.300781 0-.300781 0-23.261719 1.257812-41.570312 12.972656-61.199219 24.898438-18-4.800782-36.300781-7.199219-54.601562-7.199219-18.597657 0-37.199219 2.699219-53.695313 7.199219-20.664062-12.460938-38.796875-23.671876-62.703125-24.898438-7.5 0-14.101562 3.601562-18.902343 10.199219-10.796876 15-10.796876 47.101562-6.296876 67.199219-25.503906 33.601562-32.402343 82.5-17.101562 123 14.398438 38.699218 46.800781 65.703124 92.402344 78-3.722656 6.511718-6.667969 14.914062-7.828125 26.285156-9.210938 3.175781-17.199219 4.210937-24.628907 2.027344-7.835937-2.316407-13.941406-7.546876-19.246093-16.46875-11.914063-20.015626-32.207031-36.355469-55.3125-34.230469l2.636719 29.882812c10.699218-.980469 21.347656 10.339844 26.878906 19.671875 9.125 15.367188 21.417968 25.445313 36.546875 29.914063 11.230469 3.308593 21.496093 3.230469 32.550781.871093v40.449219c-87.300781-30.601562-151-114-151-211.800781 0-124.199219 101.800781-227 226-227s226 102.800781 226 227c0 97.800781-63.699219 181.199219-151 211.800781zm0 0" />
            </svg>
          </a>
        </div>
      </div>
      <div>
        <div className="m-3 text-center text-xs">
            <p className='text-gray-400'>
                <Trans i18nKey="contact.message">Connect & Follow me on <br /> LinkedIn, Instagram, Twitter, Github</Trans>
                <br /> &copy; 2021
            </p>
            <p className='mb-10 mt-4'>Developed with  &#9829; by Jim M. Ntare.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// CREDITS FOR THE ICONS
// <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
