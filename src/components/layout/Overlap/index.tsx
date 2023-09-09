"use client"
import React, { useState, useRef } from "react";
import { useScroll, useInView, useTransform, motion, AnimatePresence } from 'framer-motion';

export const Overlap = () => {
   
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, -100]);
    const parallax = useRef(null); 
    // const isInView = useInView(parallax); 

    return(
        <AnimatePresence>
        <div className={`w-full overlapContent mx-auto my-20`} ref={parallax}>
            <div className={`overlap mx-auto my-0 bg-left`}>
                <motion.div 
                    id="panle"
                    key='panel'
                    initial={{ opacity: 0, y: '-100%' }}
                    exit={{ opacity: 0, y: '-100%' }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={`toutCopy--overlap w-full md:w-1/2 ml-auto bg-red`}>
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
        </AnimatePresence>
        )
    }

export default Overlap;
