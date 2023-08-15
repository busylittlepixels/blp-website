import React from 'react';
import Image from 'next/image';
import imageLoader from '../../../../imageLoader';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface CarouselItem {
  carouselImageUrl: string;
}

interface CarouselContainerProps {
  title?: string;
  content?: CarouselItem[]; // Renamed 'any' to 'CarouselItem[]' for better type safety
}

export const CarouselContainer = ({ content }: CarouselContainerProps) => {
  const carouselPanels = content
    ? content.map((item, index) => (
        <div className="mr-2" key={index}>
          <Image
            src={item.carouselImageUrl}
            height={300}
            width={450}
            loader={imageLoader}
            unoptimized={true}
            alt={`carousel image ${index}`}
            className="w-full"
          />
        </div>
      ))
    : null;

  return (
    <section className="bg-white mt-24 carouselLeft mb-2">
      <div className="mx-auto max-w-7xl text-lg mb-4 pl-4">
        <h1 className="font-black tracking-tighter text-3xl md:text-[3.5rem] mb-2 md:mb-6 last:mb-0 uppercase">
          MADE IN <span style={{ color: 'red' }}>DUBLIN</span>...
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
