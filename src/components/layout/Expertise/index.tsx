import Link from 'next/link';
import { RichText } from '../RichText';
import { FadeIn } from '../../shared/FadeIn';

interface IExpertise {
  title?: string, 
  content?: any
}

export const Expertise = ({ content }: IExpertise) => {
  const { header } = content; 

  return (
    <div className="bg-white ">
      
      <FadeIn>
     
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
            <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)] -z-1">
              <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
                <defs>
                  <pattern id=":ra:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" y="100%">
                    <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#:ra:)"></rect>
              </svg>
            </div>
              <div className="mx-auto max-w-7xl px-0 md:px-8">
                <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-6xl mb-4 uppercase">
                { header ? header : 'We\'re Your '} <span style={{"color":"red"}}>Technology</span> Roadmap
                  
                </h1>
                <div className="header__underline"></div>
                <RichText content={content.content} className={`text-gray-600 mt-4 article_text flex-col`} />
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/services"
                    className="sm:w-12 btn btn-red btn-lg md:w-auto uppercase text-white px-8 py-12 z-10"
                   
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
 
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={"/assets/images/cerd.jpg"}
            alt=""
          />
          
        </div>
      </div>
      </FadeIn>
    </div>
  )
}

export default Expertise