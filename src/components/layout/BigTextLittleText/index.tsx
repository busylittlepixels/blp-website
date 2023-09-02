import { useParallax } from 'react-scroll-parallax';
import React from "react";
import BigText from "./BigText";
import VerticalLine from "../VerticalLine";
import { FadeIn } from "../../shared/FadeIn";

export const BigTextLittleText = (props:any) => {
    const parallax = useParallax({
        speed: -10
    })

    console.log(parallax.ref);
    return(
    <>

       
        <div className="w-full relative overflow-x-hidden bg-black">
            {/* @ts-ignore */}
            <div ref={parallax.ref} className="background-big-text absolute w-full text-center font-bold mx-auto my-0 hidden md:block">
                PIXELS
            </div>
            <div id="big-text-trigger"></div>
            <BigText bigText="block sm:hidden" />
            <FadeIn>  
                <div className="foreground-little-text relative left-0 right-0 text-4xl sm:text-4xl text-center font-bold mx-auto my-0 p-2 top-0">
                    <h1 className="font-black tracking-tighter text-2xl md:text-[3.5rem] last:mb-0 uppercase leading-4 my-12 text-white">SNAPPY MARKETING COPY</h1>
                    <p className="font-black text-white">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients. </p>
                </div>
            </FadeIn>
            
        </div>
        <div id="line-trigger"></div>
        <VerticalLine />

    </>
    )
};

export default BigTextLittleText;