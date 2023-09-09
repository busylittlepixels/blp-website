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
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae vitae
                            dicta sunt explicabo. 
                        </p>
                    </div>
                </div>
            
            </div>
        </div>
        )
    }

export default Overlap;
