import dynamic from "next/dynamic";

const BlockTest = dynamic(() => import('./BlockTest')); 
const CarouselBlock = dynamic(() => import('./CarouselBlock')); 
const CallToAction = dynamic(() => import('./CallToAction'));
const Contact = dynamic(() => import('./Contact'));
const Expertise = dynamic(() => import('./Expertise'));
const TextBlock = dynamic(() => import('./TextBlock'));
const LogoCloud = dynamic(() => import('./LogoCloud')); 
const ImageSlider = dynamic(() => import('./ImageSlider')); 

export { BlockTest, TextBlock, ImageSlider, CarouselBlock, Contact, CallToAction, LogoCloud, Expertise };