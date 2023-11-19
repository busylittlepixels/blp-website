/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import FadeIn from '../../../components/shared/FadeIn'

import { Services } from '../../../components/layout/Services';
import { LogoCloud } from '../../../components/layout/LogoCloud'
import { Team } from '../../../components/layout/Team'
import { Metadata } from 'next'
import { HubSpotForm } from '../../../components/layout/HubspotForm';



const studioP1 = `<h2 class="font-black text-2xl">We chart a course through the digital ecosystem <span class="rd_txt">studio</span></h2><p>Ours is a digital ecosystem crafted for scale-ups. As part of our broader fractional CTO vision, we've opted to work with the best tooling in the business: Javascript, React, NextJS, Astro for web, and React-Native for mobile. Your content, enriched by Payload or Craft CMS, becoming more than just words...it's a narrative. And with our prowess in third-party API integrations and cutting-edge hosting solutions, we promise a journey that's smooth, efficient, and memorable. Ready to redefine your digital footprint?<p>`;
const studioP2 = `<h2 class="font-black text-2xl">Expertise in <span class="rd_txt">techical solutions</span></h2><p>mobile isn't just a platform; it's a passion. Our journey has seen us partnering with global icons like Web Summit and The Next Web, to infrastructural pillars such as:... With impactful projects spanning Ireland to the Netherlands in governmental tech initiatives, we've always been at the cusp of what's next in mobile. Dive in with us, and let's craft a mobile narrative that captures hearts and minds.<p>`;
const studioP3 = `<h2 class="font-black text-2xl">More than a service; we're your <span class="rd_txt">digital compass</span></h2><p>Navigating the ever-evolving digital landscape can be daunting, but our seasoned team is here to guide you from your current position to your envisioned pinnacle. As trusted advisors, we'll share insights that illuminate your path. As builders, we craft robust solutions tailored to your unique needs. And as technical facilitators and enablers, we ensure a seamless transition and implementation, empowering your business every step of the way. With Busy Little Pixels by your side, your journey towards growth and innovation is not just assured; it's inspired.<p>`;


export const metadata: Metadata = {
  title: 'Why BLP | Busy Little Pixels',
  description: 'What We Are is Who We Are. Factional CTOs, Web and mobile application development specialists, technical business architects and trusted advisors',
  keywords: 'Fractional CTO, Technical Specialists, Professional Services, Technical Roadmap, Web and Application development',
}


export default async function Page() {
   
    return(

        <>
        <FadeIn>
        <main className={`blog`}>
        
        {/* <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
          <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
            <svg
              className="absolute bottom-5 left-full translate-x-28 transform mix-blend-darken"
              width="350"
              height="700"
              fill="none"
              viewBox="0 0 400 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="6"
                    height="6"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="350" height="700" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div> */}
          <svg className="max-md:hidden absolute right-0 transform mt-12 z-10 mr-20 mix-blend-darken" width="650" height="384" fill="none" viewBox="0 0 400 384"><defs><pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect></pattern></defs><rect width="650" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"></rect></svg>
            
          <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
              <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
                <defs>
                  <pattern id=":ra:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" y="100%">
                    <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#:ra:)"></rect>
              </svg>
            </div>
          <section className="px-6 max-sm:pt-10 md:py-20 bg-white pb-0 md:pb-0">
          
          <div className="grid grid-cols-1 justify-items-center gap-2 md:gap-10 homeAdjust mb-2">
            <div className="max-full text-left leading-relaxed">
              <h1 className="font-black text-4xl md:text-7xl mb-6 last:mb-0 text-center">WHY B<span style={{'color': 'red'}}>L</span>P?</h1>
              <div className="header__underline"></div>
            </div>
            <div className='RichText_richText__qEmi6 text-gray-600 mt-4 article_text flex-col'>
              <div className="max-full text-center leading-relaxed mb-8">
                <p className="article_text max-w-5xl mx-auto">Welcome to the heartbeat of our innovative digital craftsmanship. As a central pillar of our fractional CTO umbrella, we fuse creativity with state-of-the-art tech tools. Scaling up? No problem. With a vast array of tools in our stack, we fuel our Javascript future.  We carefully craft web and technical solutions that scale with your ambitions and objectives. Be it project ideation, planning, preparation or execution, from integrating third-party APIs to employing robust hosting solutions - we're here to elevate every busy little pixel of your digital journey.</p>
              </div>
            </div>
          </div>
          <FadeIn>
          <div className="shiney-wrapper shine">
            <img alt={'image alt blog'} src={'/assets/images/desk.webp'} width={1200} height={300} className="shadow-lg h-1/2 mx-auto rounded-lg" loading="lazy" />
          </div>
          {/* <Video videoEmbedCode={article ? article.articleVideoEmbed : null} /> */}
          </FadeIn>
          
            <div className="py-8 flex flex-col md:flex-row">
              <div className="mx-auto w-full max-w-3xl">
                  <div dangerouslySetInnerHTML={{__html: studioP1 }} className={'article_text mt-8 flex-col'}  />        
                  <div dangerouslySetInnerHTML={{__html: studioP2 }} className={'article_text mt-2 flex-col'}  />        
              </div>
            </div>
            <div className="w-full mb-12 shiney-wrapper shine" style={{"opacity": 1}}>
                <img alt="image alt blog" src="/assets/images/studio2.png" width="800" height="200" className="shadow-lg h-1/2 mx-auto rounded-lg" />
            </div>
            <div className="mx-auto w-full max-w-3xl">
                <div dangerouslySetInnerHTML={{__html: studioP3 }} className={'article_text mt-8 flex-col'}  />        
            </div>
            <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
                <svg
                  className="absolute bottom-12 right-full -translate-x-32 transform mix-blend-darken"
                  width="400"
                  height="384"
                  fill="none"
                  viewBox="0 0 400 384"
                >
                  <defs>
                    <pattern
                      id="d3eb07ae-5182-43e6-857d-35c643af9034"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect width="400" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                </svg>
              </div>
          
          </section>
          {/* <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
              <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
                <defs>
                  <pattern id=":ra:" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" y="100%">
                    <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#:ra:)"></rect>
              </svg>
          </div> */}
          <LogoCloud />
          <Services />
          <Team />
          <section className="text-black relative mt-2 mb-2 w-full max-w-full" id="contact">
            
            <div className="absolute inset-0 bg-gray-300 overflow-hidden">
               
                    <iframe width={'100%'} height={'100%'} frameBorder="0" marginHeight={0} marginWidth={0} title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152515.6931206764!2d-6.245704099999999!3d53.324320099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin%2C%20Ireland!5e0!3m2!1sen!2snl!4v1692869457747!5m2!1sen!2snl" style={{ "filter": "grayscale(1) contrast(1.2) opacity(0.4)"}}></iframe>
                    {/* {images.map((img, i) => {
                        return(
                            <iframe key={i} width={'100%'} height={'100%'} frameBorder="0" marginHeight={0} marginWidth={0} title={img.title} scrolling="no" src={images[0].map_url} style={{ "filter": "grayscale(1) contrast(1.2) opacity(0.4)", opacity: i === currentIndex ? 1 : 0, transition: 'opacity 1s'}}></iframe>
                        ); 
                    }).slice(0,1)} */}
               
            </div>
            <FadeIn>
                <div className="container px-5 py-24 mx-auto flex">
                    <div className="lg:w-1/3 md:w-2/3 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">          
                        <>
                            <h2 className="text-black text-lg mb-1 font-black uppercase">CONTACT US <span style={{ "color": "red"}}>TODAY</span></h2>
                            <div className="header__underline"></div>
                            <p className="leading-relaxed my-5 text-black">To contact us, please add your email address and message below.</p>
                            <HubSpotForm />
                        </>
                    </div>
                </div>
            </FadeIn>
        </section>
        {/* <div className="bg-white py-12 sm:py-12 lg:py-20">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                  <div className="flex flex-col items-start gap-4">
                    <h1 className="text-4xl font-black tracking-tight text-black sm:text-6xl uppercase mb-2">SOME OF OUR <span style={{"color":"red"}}>WORK</span></h1>
                    <div className="header__underline"></div>      
                  </div> 
                       
              </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
           
            <a href="https://thenextweb.com" target="_blank" rel="noopener noreferrer"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="/assets/images/tnw.png" loading="lazy" alt="The Next Web - A Financial Times Company" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">TNW - a Financial Times Company</span>
            </a>
      
                <a href="https://websummit.com" target="_blank" rel="noopener noreferrer" 
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                    <img src="/assets/images/websummit.png" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                    </div>

                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Web Summit</span>
                </a>

                <a href="https://nutriband.com" target="_blank" rel="noopener noreferrer"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                    <img src="/assets/images/nutriband.png" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                    </div>

                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Nutriband</span>
                </a>

                <a href="https://runrepublic.com/" target="_blank" rel="noopener noreferrer"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                    <img src="/assets/images/runrepublic.png" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                    </div>

                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Run Republic</span>
                </a>
  
                  <a href="https://izabelvaz.com" target="_blank" rel="noopener noreferrer"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                    <img src="/assets/images/isabel.png" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                    </div>

                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Izabel Vaz</span>
                  </a>

                  <a href="https://thenextweb.com/conference" target="_blank" rel="noopener noreferrer"
                      className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                      <img src="/assets/images/tnw-conference.png" loading="lazy" alt="TNW Conference" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                      <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                      </div>

                      <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">TNW Conference</span>
                  </a>
                  <a href="https://ronan-oleary.com" target="_blank" rel="noopener noreferrer"
                      className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                      <img src="/assets/images/ro-couch-desk.jpeg" loading="lazy" alt="Danger Ro" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                      <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                      </div>

                      <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Danger Ro</span>
                  </a>
            
                  <a href="#"
                      className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                      <img src="/assets/images/mcCf.png" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                      <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                      </div>

                      <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">McCann-Fitzgerald</span>
                  </a>

                  <a href="https://algarvemusicseries.com" target="_blank" rel="noopener noreferrer"
                      className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                      <img src="/assets/images/ams.png" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                      <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                      </div>

                      <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Algarve Music Series</span>
                  </a>

                  </div>
            </div>
          </div> */}
        </main>
        </FadeIn>
    </>
    )
}
