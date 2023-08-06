'use client';

import tw from 'tailwind-styled-components';
import { FadeIn } from '../../shared/FadeIn';



const SectionGrid = tw.div`
    grid grid-cols-1 justify-items-center gap-10 mb-6
`

const HeadingContainer = tw.div`
    mx-auto 
    w-full  
    text-start
`

const Heading = tw.h1`
    px-6 font-black text-4xl md:text-6xl mb-6 last:mb-0 uppercase
`

export const TitleContainer = ({ title, subtitle }) => {

    
    
    return (
        <section className={`w-full md:boundedContainer`}>
            <SectionGrid className="homeAdjust">
               
                <HeadingContainer>
                    <FadeIn>
                        <Heading>WE ARE BUSY<span style={{ "color": "red" }}>{title}</span>PIXELS.<br/>WE <span style={{ "color": "red" }}>MAKE TECH GO</span>.</Heading>
                    </FadeIn>
                </HeadingContainer>
                
            </SectionGrid>
        </section>
    );
}