/* eslint-disable react/jsx-no-comment-textnodes */
import Link from 'next/link'
import FadeIn from '../../../components/shared/FadeIn';
import { Metadata } from 'next'

const dummy = `<h3 class="font-black text-2xl mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3> Perspiciatis in accusamus quisquam nemo nulla cupiditate iusto ullam amet maxime eius soluta, ab, maiores nobis? Corrupti ut illo voluptas optio enim fugiat accusantium error quod aliquid. Eligendi, temporibus. Rem temporibus a assumenda nam voluptatem aperiam alias eius. <br /><br /><h3 class="font-black text-2xl mb-4">Repellat mollitia sit possimus officiis dolorum</h3> Iste nemo est, sequi blanditiis hic atque earum vitae quos? Illum consequatur, eligendi quam, 
fugiat amet dolores voluptates soluta quia vero ratione aliquid nostrum sunt velit earum consectetur, ea recusandae porro. Sunt ex pariatur neque molestias nulla recusandae perferendis, dolores temporibus excepturi modi. Accusantium tempore, eaque perferendis ex consequatur veritatis nobis similique, quae nihil repellat animi eius incidunt mollitia cupiditate vero dolorum expedita delectus magnam suscipit nesciunt sequi.
<br /><br /><h3 class="font-black text-2xl mb-4">Cumque provident mollitia</h3> Perspiciatis eum quasi omnis, eius ratione et minima. Tempora molestiae qui sunt commodi, quibusdam eveniet ullam ipsum ipsam vero ea aliquid deserunt dolorem nisi voluptates libero inventore adipisci rerum doloribus, architecto, impedit dicta! Perferendis explicabo illo eaque id nostrum fugit repellendus? Tempore ad eius eveniet est quod consequuntur, quaerat sed magni fugiat earum itaque impedit accusamus aliquam consectetur assumenda voluptatibus cupiditate pariaturs.`;


export const metadata: Metadata = {
  title: 'Studio | Busy Little Pixels',
  description: 'Studio - We are Fractional CTO experts. Headless web and app development, devops, project management, digital strategy, media and events',
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
          <div className="grid grid-cols-1 justify-items-center gap-10 homeAdjust mb-2">
            <div className="max-full text-center leading-relaxed">
              <h1 className="composedHeading">STEP INTO OUR <span style={{'color': 'red'}}>STUDIO</span></h1>
              <div className="header__underline"></div>
            </div>
            <div className="max-full text-center leading-relaxed mb-8">
              <p className="article_text max-w-5xl mx-auto">Lorem ipsum dolor, adipisicing elit. Eum saepe, quisquam commodi, similique earum facilis vitae vero quasi, dicta maxime atque veniam molestias accusantium laudantium consequatur. Nihil adipisci ratione maiores, illum perspiciatis quaerat voluptatibus quidem laudantium sequi assumenda, deserunt perferendis. Deleniti quia provident voluptate unde earum, maiores modi qui fugiat.</p>
            </div>
          </div>
          <FadeIn>
          <img alt={'image alt blog'} src={'/assets/images/desk.webp'} width={1200} height={300} className="shadow-lg h-1/2 mx-auto rounded-lg" loading="lazy" />
          
          {/* <Video videoEmbedCode={article ? article.articleVideoEmbed : null} /> */}
          </FadeIn>
          
            <div className="py-8 flex flex-col md:flex-row">
              <div className="mx-auto w-full max-w-3xl">
                  <div dangerouslySetInnerHTML={{__html: dummy }} className={'article_text mt-8 flex-col'}  />        
              </div>
            </div>
            <div className="w-full mt-20 mb-32" style={{"opacity": 1}}>
                <img alt="image alt blog" src="/assets/images/studio2.png" width="800" height="200" className="shadow-lg h-1/2 mx-auto rounded-lg" />
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
       
    

        <div className="bg-white py-12 sm:py-12 lg:py-20">
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
          </div>
        </main>
        </FadeIn>
    </>
    )
}
