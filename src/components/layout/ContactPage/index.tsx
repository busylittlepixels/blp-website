'use client';

import React from 'react';
import { FormEvent, useState } from 'react';
import { FadeIn } from '../../shared/FadeIn';

type IContact = {
    content: {
        map_url?: string
        form_title?: string
    }
}

export const ContactPage = ({ content }: any) => {

    //onst { map_url, form_title } = content;
    const map_url = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152515.6931206764!2d-6.245704099999999!3d53.324320099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin%2C%20Ireland!5e0!3m2!1sen!2snl!4v1692869457747!5m2!1sen!2snl`;
    const form_title = `Get in Touch`;
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
      //   console.log(rawResponse)
      // Reset the form fields
      setMessage('')
      setName('')
      setEmail('')
      setResult('Your Message has sent!')
    }


    return(

        <section className="text-black relative mt-2 mb-2 w-full max-w-full" id="contactPage">
                
                <div className="absolute inset-0 bg-gray-300 overflow-hidden">
                <iframe width="100%" height="100%" frameBorder="0" marginHeight={0} marginWidth={0} title="map" scrolling="no" src={map_url} style={{ "filter": "grayscale(1) contrast(1.2) opacity(0.4)" }} ></iframe>
                </div>
                <FadeIn>
                <div className="container px-5 py-24 mx-auto flex">
                    <div className="w-1/2 max-md:w-2/3 bg-white rounded-lg p-8 flex flex-col md:ml-auto  mt-10 md:mt-0 relative z-10 shadow-md">          
                    
                    <>
                        <h2 className="text-black text-lg mb-1 font-black uppercase">{form_title} <span style={{ "color": "red"}}></span></h2>
                        <div className="header__underline"></div>
                        {result ? result :
                    <>
                        <p className="leading-relaxed mt-5 text-black">Please complete the form below. We aim to reply to all messages within 24 hours.</p><form className="py-4 space-y-4" onSubmit={handleSubmit}>
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
    )
}

export default ContactPage;