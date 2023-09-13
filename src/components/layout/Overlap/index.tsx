"use client"
import React, { useState, useRef } from "react";
import {
    motion,
    MotionValue,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from 'framer-motion';

export const Overlap = () => {
    const [dist, setDist] = useState('30%');
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target,
        offset: ['start end', 'end start'],
    });
    const parallax = useTransform(scrollYProgress, [0, 1], [-30, 30]);
    
    // @ts-ignore
    useMotionValueEvent(parallax, 'change', (v) => setDist(v));
    
    return(
        
        <div className={`w-full overlapContent mx-auto my-20`}>
            <div className={`overlap mx-auto my-0 bg-left`} ref={target}>
                <div 
                    id="panel"
                    key="panel"
                    className={`toutCopy--overlap w-full md:w-1/2 ml-auto bg-red`}
                    style={{ "transform": `translateY(${dist}%)`}}// @ts-ignore
                    parallax={parallax}>
                    <h1 className="toutHeader--overlap uppercase font-bold">We <span style={{ "color": "#000"}}>Heart </span>Code</h1>
                    <div className="text--overlap text-white mt-6 text-lg leading-8">
                        <p>
                            Our passion for tech, for programming and for growth is evident in every line of code we write, every roadmap we draft, and every word of advice and guidance we offer. We believe that coding is an art—a symphony of logic and creativity that has the power to innovate and inspire. We see tech as a driver of progress and growth and a global scale, and our team is driven by the excitement of problem-solving, the joy of crafting elegant solutions, the belief that technology can be a force for good.  
                        </p>
                    </div>
                </div>
            
            </div>
        </div>
        )
    }

export default Overlap;
