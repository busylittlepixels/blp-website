
import { motion } from 'framer-motion';
import { RichText } from '../RichText';
import { FadeIn, FadeInRight } from '../../shared/FadeIn';

export const CallToAction = ({ content }:any) => {
    
    const { headerStart, headerStyled, headerEnd, displayButton, buttonText, buttonLink, ctaImage} = content;
    
    return (
    <div className="bg-white ">
      
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 md:pt-8 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-20 sm:py-40 lg:pr-8 lg:py-20 lg:pr-0">
                <FadeInRight>
              <div className="mx-auto max-w-7xl px-0 md:px-8">
                <h1 className="composedHeading">
                  {headerStart} <span style={{"color":"red"}}>{headerStyled}</span> {headerEnd}
                </h1>
                <div className="header__underline"></div>
                <div className="text-gray-600 mt-8 article_text">
                    <RichText className={`text-gray-600 mt-4 article_text`} content={content.content} />
                </div>
                {displayButton ? 
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="sm:w-12 btn btn-red btn-lg md:w-auto uppercase text-white px-6 py-4"
                   
                  >
                    Learn More
                  </a>
                </div>
                : null}
              </div>
              </FadeInRight>
            </div>
          </div>
          
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <FadeIn className={`h-full`}>
          <img
            className="object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={ctaImage.url}
            alt=""
          />
        </FadeIn>
        </div>
      </div>
    </div>
  )
}

export default CallToAction