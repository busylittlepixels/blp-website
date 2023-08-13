import React from 'react'
import Image from 'next/image'
import imageLoader from '../../../../imageLoader';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { Bounded } from "./Bounded";
// import { GalleryGrid } from "../components/GalleryGrid";
import { LogoCloud } from "../LogoCloud";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const CarouselContainer = ({ title, items }) => {
  
  
  
  const carouselPanels = items ? items.map((item, index) => {
    return (
        <div className={'mr-2'} key={index}>
          <Image src={item.carouselImageUrl} height={300} width={450} loader={imageLoader} unoptimized={true} alt={`carousel image ${index}`} className={'w-full'} />
        </div>
      )
  }) : null;

  return(
    <>
      <LogoCloud />
      <section className="bg-white mt-24 carouselLeft mb-2">
        
        <div className="mx-auto max-w-7xl text-lg mb-4 pl-4">
          <h1 className="font-black tracking-tighter text-3xl md:text-[3.5rem] mb-2 md:mb-6 last:mb-0 uppercase">MADE IN <span style={{"color":"red"}}>AMSTERDAM</span> AND <span style={{"color":"red"}}>DUBLIN</span>...</h1>
          <div className="header__underline"></div>
        </div>
        <Carousel showDots={false} arrows={false} autoPlay={true} autoPlaySpeed={3000} draggable infinite responsive={responsive}> 
          {carouselPanels}
        </Carousel>
      </section>
    </>
    
  );
}

export default CarouselContainer








