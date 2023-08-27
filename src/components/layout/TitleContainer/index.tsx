'use client';

import tw from 'tailwind-styled-components';
import { FadeIn } from '../../shared/FadeIn';



const SectionGrid = tw.div`
    grid grid-cols-1 justify-items-center gap-10 py-6
`

const HeadingContainer = tw.div`
    mx-auto 
    w-full  
    text-start
`

const Heading = tw.h1`
    px-6 font-black text-4xl md:text-6xl mb-6 last:mb-0 uppercase tracking-tight
`

export const TitleContainer = ({ title, subtitle }) => {

    
    
    return (
        <section className={`w-full md:boundedContainer`}>
            <SectionGrid className="homeAdjust">
               
                <HeadingContainer>
                    <Heading>WE ARE BUSY<span style={{ "color": "red" }}>{title}</span>PIXELS...<br/>& WE MAKE<span style={{ "color": "red" }}> TECH</span> GO.</Heading>
                    <div className="header__underline ml-6"></div>
                </HeadingContainer>
               
            </SectionGrid>
        </section>
    );
}

export default TitleContainer;