'use client';

import tw from 'tailwind-styled-components';



const SectionGrid = tw.div`
    grid grid-cols-1 justify-items-center gap-10 mb-6
`

const HeadingContainer = tw.div`
    mx-auto 
    w-full  
    text-start
`

const Heading = tw.h1`
    px-6 font-black text-6xl md:text-7xl mb-6 last:mb-0 uppercase
`

export const TitleContainer = ({ title, subtitle }) => {

    
    
    return (
        <section className={`w-full boundedContainer`}>
            <SectionGrid className="homeAdjust">
                <HeadingContainer>
                    <Heading>WE ARE BUSY<span style={{ "color": "red" }}>{title}</span>PIXELS.<br/>WE <span style={{ "color": "red" }}>MAKE TECH GO</span>.</Heading>
                </HeadingContainer>
            </SectionGrid>
        </section>
    );
}