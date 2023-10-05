"use client";
import React from 'react';
import { useCarousel } from '../../../hooks/useCarousel';
import { images } from "./images";

export const HeroCarousel = () => {
    let duration = 5;
    const currentIndex = useCarousel({ images, duration });

    return (
        <div className="carousel-wrapper">
            {images.map((img, i) => (
            <img
                key={i}
                src={img.src}
                alt={`Slide ${i + 1}`}
                style={{
                    opacity: i === currentIndex ? 1 : 0,
                    transition: 'opacity 1s',
                }}
            />
            ))}
        </div>
    );
};

export default HeroCarousel;
