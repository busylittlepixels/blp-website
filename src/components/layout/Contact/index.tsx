'use client';

import { FormEvent, useState } from 'react';
import { FadeIn } from '../../shared/FadeIn';

type IContact = {
    content: {
        map_url?: string
        form_title?: string
    }
}

export const Contact = ({ content }: IContact) => {

    const { map_url, form_title } = content;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      setResult('Processing...');
      e.preventDefault();

      let form = {
        name, 
        email,
        message
      }
      // @ts-ignore
      const formData = new FormData(e.target);

      const rawResponse = await fetch("https://getform.io/f/2eaf6034-246d-4ab5-8250-c468bffe71fb", {
          method: "POST",
          body: formData,
          headers: {
              "Accept": "application/json",
          },
      })
      // print to screen
      console.log(rawResponse)
      // Reset the form fields
      setMessage('')
      setName('')
      setEmail('')
      setResult('Your Message has sent!')
    }


    return(

        <section className="text-black relative mt-2 mb-2 w-full max-w-full" id="contact">
            
            <div className="absolute inset-0 bg-gray-300 overflow-hidden">
              <iframe width="100%" height="100%" frameBorder="0" marginHeight={0} marginWidth={0} title="map" scrolling="no" src={map_url} style={{ "filter": "grayscale(1) contrast(1.2) opacity(0.4)" }} ></iframe>
            </div>
            <FadeIn>
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-2/3 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">          
                 
                <>
                    <h2 className="text-black text-lg mb-1 font-black uppercase">{form_title} <span style={{ "color": "red"}}></span></h2>
                    <div className="header__underline"></div>
                    {result ? result :
                <>
                    <p className="leading-relaxed mt-5 text-black">To contact us, please add your email address and message below.</p><form className="py-4 space-y-4" onSubmit={handleSubmit}>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-black">Your Name</label>
                            <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-black">Email</label>
                            <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-black">Message</label>
                            <textarea value={message} onChange={e => setMessage(e.target.value)} id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
                        </div>
                        <button className="w-full btn btn-red btn-lg md:w-auto">SUBMIT</button>
                        <p className="text-xs text-white-500 mt-3">We will not pass your data to third parties.</p>
                    </form></>
                  }
                </>
            </div>
            
        </div>
        </FadeIn>
      </section>
)}

export default Contact;