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
          <section id="author" aria-labelledby="author-title" className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16">
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
            <div className="relative mx-auto max-w-5xl sm:px-6">
              <div className="bg-slate-50 max-sm:pt-12 px sm:rounded-6xl">
                <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
                  <img alt="" sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem" src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" width="576" height="576" decoding="async" data-nimg="1" className="absolute inset-0 h-full w-full object-cover shadow-xl" loading="lazy" style={{ "color": "transparent"}} />
                </div>
                <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32 rounded shadow-xl">
                    
                    <p className="mt-8 font-display font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                      <span className="block text-red-600">Paddy Ryan –</span> Hey there, I’m the author behind 'Through the Keystroke'.</p>
                    <p className="mt-4 text-md tracking-tight text-slate-700 article_text">I’ve been designing and developing professionally for over a decade and have worked with dozens of the biggest brands to create custom sets for their products. I’ve worked with devel of all skill levels and honed my way of teaching to really click for anyone who has the itch to start designing their own icons.</p>
                </div>
                </div>
            </div>
        </section>
       
        <section className="px-6 py-20 md:py-20 bg-white">
          <h3 className="pb-8 font-black text-4xl mb-6 last:mb-0 uppercase">RELATED <span style={{ "color": "red"}}></span> <span style={{ "color": "red"}}>ARTICLES</span></h3>
              
                <div className="grid sm:gap-4 gap-2 grid-cols-2 md:grid-cols-4">
                    <div>
                      <img src="https://placedog.net/650/450/r" className="object-cover w-full col-span-1 bg-center" alt="Doggo" loading="lazy" />
                      <div className="col-span-1">
                        <h1 className="pt-2 mb-2 md:text-xl font-extrabold leading-snug text-gray-800">
                          <Link href="/words/plerp" className="duration-300 transition ease-in-out  text-gray-900 hover:text-red-500">Process Documents Using Artificial Intelligence For RPA Bots</Link>
                        </h1>
                        <p className="mb-3 text-sm hidden md:visible font-normal text-gray-500">
                          Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
                          Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
                        </p>
                        <a href="#" className="hidden md:visible btn btn-light btn-sm">Read More</a>
                      </div>
                    </div>
                    <div>
                      <img src="https://placedog.net/650/450/r" className="object-cover w-full col-span-1 bg-center" alt="Doggo" loading="lazy" />
                      <div className="col-span-1">
                        
                        
                        <h1 className="pt-2 mb-2 md:text-xl font-extrabold leading-snug text-gray-800">
                          <a href="#" className="duration-300 transition ease-in-out  text-gray-900 hover:text-red-500">Process Documents Using Artificial Intelligence For RPA Bots</a>
                        </h1>
                        <p className="mb-3 text-sm hidden md:visible font-normal text-gray-500">
                          Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
                          Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
                        </p>
                        <a href="#" className="hidden md:visible btn btn-light btn-sm">Read More</a>
                      </div>
                    </div> 
                    <div>
                      <img src="https://placedog.net/650/450/r" className="object-cover w-full col-span-1 bg-center" alt="Doggo" loading="lazy" />
                      <div className="col-span-1">
                        
                        
                        <h1 className="pt-2 mb-2 md:text-xl font-extrabold leading-snug text-gray-800">
                          <a href="#" className="duration-300 transition ease-in-out  text-gray-900 hover:text-red-500">Process Documents Using Artificial Intelligence For RPA Bots</a>
                        </h1>
                        <p className="mb-3 text-sm hidden md:visible font-normal text-gray-500">
                          Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
                          Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
                        </p>
                        <a href="#" className="hidden md:visible btn btn-light btn-sm">Read More</a>
                      </div>
                    </div> 
                    <div>
                      <img src="https://placedog.net/650/450/r" className="object-cover w-full col-span-1 bg-center" alt="Doggo" loading="lazy" />
                      <div className="col-span-1">
                        
                        
                        <h1 className="pt-2 mb-2 md:text-xl font-extrabold leading-snug text-gray-800">
                          <a href="#" className="duration-300 transition ease-in-out  text-gray-900 hover:text-red-500">Process Documents Using Artificial Intelligence For RPA Bots</a>
                        </h1>
                        <p className="mb-3 text-sm hidden md:visible font-normal text-gray-500">
                          Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
                          Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
                        </p>
                        <a href="#" className="hidden md:visible btn btn-light btn-sm">Read More</a>
                      </div>
                    </div> 
                </div>
          
          </section>
        </main>
        </FadeIn>
    </>
    )
}
