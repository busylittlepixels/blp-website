import React from 'react';
import Image from 'next/image';
import imageLoader from '../../../../imageLoader';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

interface CarouselContainerProps {
  title?: any;
  content?: any;
}

export const CarouselContainer = ({ content }: CarouselContainerProps) => {
  
  console.log(content.carousel);
  
  
  const carouselPanels = content ? Object.entries(content.carousel).map((item:any, index:number) => {
        // console.log(item[1]['carouselImageUrl']);
        return(
        <div className="mr-2" id={item[1]['carouselImageUrl']}>
          <Image
            // @ts-ignore
            src={item[1]['carouselImageUrl']}
            height={300}
            width={450}
            loader={imageLoader}
            unoptimized={true}
            alt={`carousel image ${index}`}
            className="w-full"
          />
        </div>
        )
      })
    : null;

  return (
    <section className="bg-white mt-24 carouselLeft mb-2">
      <div className="mx-auto max-w-7xl text-lg mb-4 pl-4">
        <h1 className="font-black tracking-tighter text-3xl md:text-[3.5rem] mb-2 md:mb-6 last:mb-0 uppercase">
          MADE IN <span style={{ color: 'red' }}>DUBLN</span>...
        </h1>
        <div className="header__underline"></div>
      </div>
      <Carousel
        showDots={false}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={3000}
        draggable
        infinite
        // @ts-ignore
        responsive={responsive}
      >
          {carouselPanels}
      </Carousel>
    </section>
  );
}

export default CarouselContainer;
