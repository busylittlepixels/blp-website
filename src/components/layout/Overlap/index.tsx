'use client';
import React, { useState, useRef } from "react";
import { useTransform, useScroll, useInView, motion } from 'framer-motion';

export const Overlap = (props: any) => {
    
    const parallax = useRef(null);
    const [dimension, setDimension] = useState({width:0, height:0});
    const isInView = useInView(parallax);

    const { scrollYProgress } = useScroll({
        target: parallax,
        offset: ['start end', 'end start']
    })
    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])

    return(
        
        <div className={`w-full overlapContent mx-auto my-20`} >
            <div className={`overlap mx-auto my-0 bg-left`}>
                
                <motion.div 
                    initial={{ y: -100 }}
                    animate={{ y: isInView ? 30 : -30 }}
                    transition={{ type: "linear", duration: .5 }}
                    exit={{ y: 0 }}
                    className={`toutCopy--overlap w-full md:w-1/2 ml-auto bg-red`} ref={parallax}>
                    <h1 className="toutHeader--overlap uppercase font-bold">We <span style={{ "color": "#000"}}>Heart </span>Code</h1>
                    <div className="text--overlap text-white mt-6 text-lg leading-8">
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae vitae
                            dicta sunt explicabo. 
                        </p>
                    </div>
                </motion.div>
            
            </div>
        </div>
        );
    }

export default Overlap;
