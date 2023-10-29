'use client';

import React from 'react';
import { FormEvent, useState } from 'react';
import { FadeIn } from '../../shared/FadeIn';
import HubSpotForm from '../HubspotForm';
import { useCarousel } from '../../../hooks/useCarousel';
import { images } from "./images";

type IContact = {
    content: {
        map_url?: string
        form_title?: string
    }
}

export const Contact = ({ content }: IContact) => {

    const { map_url, form_title } = content;
    let duration = 10;
    const currentIndex = useCarousel({ images, duration });
   
    return(

        <section className="text-black relative mt-2 mb-2 w-full max-w-full" id="contact">
            
            <div className="absolute inset-0 bg-gray-300 overflow-hidden">
                <div className="carousel-wrapper">
                    {/* <iframe width={'100%'} height={'100%'} frameBorder="0" marginHeight={0} marginWidth={0} title="map" scrolling="no" src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77979.83662249324!2d4.833920986955999!3d52.35464494712458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam!5e0!3m2!1sen!2snl!4v1673131081468!5m2!1sen!2snl'} style={{ "filter": "grayscale(1) contrast(1.2) opacity(0.4)"}}></iframe> */}
                    {images.map((img, i) => {
                        return(
                            <iframe key={i} width={'100%'} height={'100%'} frameBorder="0" marginHeight={0} marginWidth={0} title={img.title} scrolling="no" src={img.map_url} style={{ "filter": "grayscale(1) contrast(1.2) opacity(0.4)", opacity: i === currentIndex ? 1 : 0, transition: 'opacity 1s'}}></iframe>
                        ); 
                    })}
                </div>
            </div>
            <FadeIn>
                <div className="container px-5 py-24 mx-auto flex">
                    <div className="lg:w-1/3 md:w-2/3 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">          
                        <>
                            <h2 className="text-black text-lg mb-1 font-black uppercase">{form_title} <span style={{ "color": "red"}}></span></h2>
                            <div className="header__underline"></div>
                            <p className="leading-relaxed my-5 text-black">To contact us, please add your email address and message below.</p>
                            <HubSpotForm />
                        </>
                    </div>
                </div>
            </FadeIn>
        </section>
    )
}

export default Contact;