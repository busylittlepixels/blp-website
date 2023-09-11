
"use client";
import React, { useRef } from 'react';
import BigText from "./BigText";
import { useInView, motion } from "framer-motion";

export const BigTextLittleText = props => {
    const ref = useRef(null)
    const isInView = useInView(ref);

   
    return(
        <div className="w-full relative overflow-x-hidden bg-black" ref={ref}>
            <div id="big-text-trigger" />
            
            <motion.div
                
                initial={{ opacity: 0.1 }}
                animate={{ y: isInView ? 50 : -10, opacity: isInView ? 0.9 : 0 }}
                transition={{ type: "spring", duration: 3 }}
                exit={{ opacity: 0.1, y: -10 }}
                className="leading-none absolute left-0 right-0 pb-32 hidden sm:block"
            >
                
                    <div className="background-big-text relative text-center font-bold mx-auto my-0 hidden md:block">
                        busy?
                    </div>
            </motion.div>
            <BigText bigText="block sm:hidden" />
            <motion.div
                initial={{ opacity: 0.1 }}
                animate={{ y: isInView ? -50 : 10, opacity: isInView ? 1 : 0 }}
                transition={{ type: "spring", duration: 2 }}
                exit={{ opacity: 0.1, y: -50 }}
                className="foreground-little-text relative left-0 right-0 text-4xl sm:text-4xl text-center font-bold mx-auto my-0 p-2 top-0">
                <h1 className="font-black tracking-tighter text-4xl md:text-7xl mb-12 last:mb-0 uppercase leading-4">HEARD ENOUGH?</h1>
                <p>
                Sound like a fit? All set to go? Ready to transform your tech objectives into outstanding results?</p>
                <div id="line-trigger" />
            </motion.div>
        </div>
    );
};

export default BigTextLittleText;
