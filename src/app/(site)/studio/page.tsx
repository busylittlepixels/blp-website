/* eslint-disable react/jsx-no-comment-textnodes */
import Link from 'next/link'
import FadeIn from '../../../components/shared/FadeIn';
import { Metadata } from 'next'

const dummy = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in accusamus quisquam nemo nulla cupiditate iusto ullam amet maxime eius soluta, ab, maiores nobis? Corrupti ut illo voluptas optio enim fugiat accusantium error quod aliquid. <br /><br />Eligendi, temporibus. Rem temporibus a assumenda nam voluptatem aperiam alias eius repellat mollitia sit possimus officiis dolorum iste nemo est, sequi blanditiis hic atque earum vitae quos? Illum consequatur, eligendi quam, 
fugiat amet dolores voluptates soluta quia vero ratione aliquid nostrum sunt velit earum consectetur, ea recusandae porro. Sunt ex pariatur neque molestias nulla recusandae perferendis, dolores temporibus excepturi modi. Accusantium tempore, eaque perferendis ex consequatur veritatis nobis similique, quae nihil repellat animi eius incidunt mollitia cupiditate vero dolorum expedita delectus magnam suscipit nesciunt sequi.
cumque provident mollitia perspiciatis eum quasi omnis, eius ratione et minima. Tempora molestiae qui sunt commodi, quibusdam eveniet ullam ipsum ipsam vero ea aliquid deserunt dolorem nisi voluptates libero inventore adipisci rerum doloribus, architecto, impedit dicta! Perferendis explicabo illo eaque id nostrum fugit repellendus? Tempore ad eius eveniet est quod consequuntur, quaerat sed magni fugiat earum itaque impedit accusamus aliquam consectetur assumenda voluptatibus cupiditate pariatur! <br /><br />Repellat laborum eveniet maiores nobis rerum nihil enim et, esse sapiente! Laborum natus aspernatur odio doloribus dolore voluptate repellendus labore fugit rerum quaerat magnam soluta aliquid, eligendi consequuntur maiores aperiam corporis tempora quam repudiandae quod quis nostrum et! Minus laboriosam harum aut et numquam. Obcaecati quae voluptates, magnam, dolorum necessitatibus quas fugiat officiis et tenetur impedit saepe sed libero facere fuga consequatur eius explicabo ex error optio. Sunt, voluptatum! Ullam eveniet fugiat vero rem maiores obcaecati rerum numquam laboriosam iure tempore. Provident magni inventore molestias sapiente eos voluptate in repellat.s`;


export const metadata: Metadata = {
  title: 'Studio | Busy Little Pixels',
  description: 'Studio - We are Fractional CTO experts. Headless web and app development, devops, project management, digital strategy, media and events',
}


export default async function Page() {
   
    return(

        <>
        <FadeIn>
        <main className={`blog`}>
        
        <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
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
        </div>
        
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
          <img alt={'image alt blog'} src={'/assets/images/desk.jpeg'} width={1200} height={300} className="shadow-xl h-1/2 mx-auto" />
          
          {/* <Video videoEmbedCode={article ? article.articleVideoEmbed : null} /> */}
          </FadeIn>
          
            <div className="py-8 flex flex-col md:flex-row">
              <div className="mx-auto w-full max-w-3xl">
                  <div dangerouslySetInnerHTML={{__html: dummy }} className={'article_text mt-8 flex-col'}  />        
              </div>
            </div>
            <div className="w-full mt-20 mb-32" style={{"opacity": 1}}>
                <img alt="image alt blog" src="/assets/images/desk.jpeg" width="1200" height="300" className="shadow-xl h-1/2 mx-auto" />
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
           
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">TNW</span>
            </a>
      
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Web Summit</span>
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Nutriband</span>
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Run Republic</span>
            </a>
 
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Algarve Music Series</span>
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dicpic</span>
            </a>
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
            </a>
        </div>
    </div>
</div>
        </main>
        </FadeIn>
    </>
    )
}
