
import { motion } from 'framer-motion';


export const Expertise = () => {

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
           
              <div className="mx-auto max-w-7xl px-0 md:px-8">
                <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-6xl mb-4 uppercase">
                  Optimize Your <span style={{"color":"red"}}>Technology</span> Roadmap...
                </h1>
                <div className="header__underline"></div>
                <p className="text-gray-600 mt-8 article_text">
                  Unlock your business's technological potential with our fractional CTO services. Gain access to experienced CTOs, Tech Leads and Developers who provide strategic leadership on a flexible basis. We align your technology roadmap with your business objectives, identify innovation opportunities, and optimize your technology investments, keeping you ahead of the competition.</p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="sm:w-12 btn btn-red btn-lg md:w-auto uppercase text-white px-6 py-4"
                   
                  >
                    Learn More
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
 
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={"/assets/img/cerd.jpg"}
            alt=""
          />
          
        </div>
      </div>
    </div>
  )
}

export default Expertise