/* eslint-disable react/jsx-no-comment-textnodes */
'use client';
import Link from 'next/link'
import { motion } from "framer-motion";
// import { Video } from '../../../../components/layout/Video'
import { FadeIn, FadeInRight } from '../../../../components/shared/FadeIn';

const dummy = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in accusamus quisquam nemo nulla cupiditate iusto ullam amet maxime eius soluta, ab, maiores nobis? Corrupti ut illo voluptas optio enim fugiat accusantium error quod aliquid. <br /><br /><h3 class="font-black text-2xl mb-2">Eligendi, temporibus.</h3> Rem temporibus a assumenda nam voluptatem aperiam alias eius repellat mollitia sit possimus officiis dolorum iste nemo est, sequi blanditiis hic atque earum vitae quos? Illum consequatur, eligendi quam, 
fugiat amet dolores voluptates soluta quia vero ratione aliquid nostrum sunt velit earum consectetur, ea recusandae porro. Sunt ex pariatur neque molestias nulla recusandae perferendis, dolores temporibus excepturi modi. Accusantium tempore, eaque perferendis ex consequatur veritatis nobis similique, quae nihil repellat animi eius incidunt mollitia cupiditate vero dolorum expedita delectus magnam suscipit nesciunt sequi. <br /><br />Nisi minima voluptas, est, alias quam maiores voluptate quis fugiat laborum corrupti sunt enim aperiam mollitia exercitationem iste numquam dolorem dolore minus! Veniam ea voluptates saepe minus porro dolor illum aliquid a possimus eius dicta iusto quis eveniet quasi hic sapiente consequatur, fugit corporis, assumenda illo alias architecto excepturi eaque officiis. 
Ut perspiciatis accusantium hic eius cum fugiat, at dignissimos deleniti qui laboriosam. Quisquam deserunt eaque atque totam reprehenderit corporis repellat consequuntur, minus iure, sed, nihil quidem aliquam porro possimus quam est labore dolorem itaque recusandae incidunt! 
<figure class="my-16"><img class="aspect-video rounded-xl bg-gray-50 object-cover" src="/assets/images/heart.webp" alt=""><figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="mt-0.5 h-5 w-5 flex-none text-gray-300"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>Faucibus commodo massa rhoncus, volutpat.</figcaption></figure>s
Fugit neque temporibus vel nesciunt odio dolore non consequuntur aut ut, veniam hic nam magnam, inventore aspernatur molestias voluptatum necessitatibus? Aut, debitis aperiam!
Minima, magnam illum fuga quia consequatur tenetur modi officia ipsam laudantium repellendus architecto laborum voluptate, repellat perspiciatis veniam. Quam reiciendis a assumenda aspernatur laudantium quibusdam nemo? Assumenda sunt id maiores, illo tenetur exercitationem. Accusamus facere quo deleniti a aspernatur, repudiandae at, voluptatibus, modi iusto officiis ipsum vel doloremque. Illo incidunt facilis aspernatur ex voluptatum possimus deleniti aliquid, labore, accusamus necessitatibus impedit velit culpa itaque cumque. <br /><br />
Ad, beatae incidunt neque aperiam exercitationem quia odio. Ipsum ducimus quisquam itaque porro dolores, hic sapiente excepturi eum reiciendis culpa cupiditate tempore praesentium, et exercitationem placeat odit commodi veniam? <br /><br /><h3 class="font-black text-2xl mb-2">In praesentium impedit</h3> blanditiis eum, placeat ratione doloremque hic, nemo vel ex deserunt? Quia sequi aperiam quam voluptatum 
cumque provident mollitia perspiciatis eum quasi omnis, eius ratione et minima. Tempora molestiae qui sunt commodi, quibusdam eveniet ullam ipsum ipsam vero ea aliquid deserunt dolorem nisi voluptates libero inventore adipisci rerum doloribus, architecto, impedit dicta! Perferendis explicabo illo eaque id nostrum fugit repellendus? Tempore ad eius eveniet est quod consequuntur, quaerat sed magni fugiat earum itaque impedit accusamus aliquam consectetur assumenda voluptatibus cupiditate pariatur! <br /><br />Repellat laborum eveniet maiores nobis rerum nihil enim et, esse sapiente! Laborum natus aspernatur odio doloribus dolore voluptate repellendus labore fugit rerum quaerat magnam soluta aliquid, eligendi consequuntur maiores aperiam corporis tempora quam repudiandae quod quis nostrum et! 
Minus laboriosam harum aut et numquam. Obcaecati quae voluptates, magnam, dolorum necessitatibus quas fugiat officiis et tenetur impedit saepe sed libero facere fuga consequatur eius explicabo ex error optio. Sunt, voluptatum! Ullam eveniet fugiat vero rem maiores obcaecati rerum numquam laboriosam iure tempore. Provident magni inventore molestias sapiente eos voluptate in repellat. Repellat temporibus saepe illo eligendi quos vel distinctio dolores quaerat sed id magni, modi accusantium debitis ipsum. Rem commodi fuga recusandae voluptatum aut hic autem! Ipsum provident, aperiam optio voluptates quas voluptatum expedita eaque eius illum, odio necessitatibus fugit id cum voluptatem possimus, repellat ullam est error! Dolores exercitationem, consectetur eius voluptates expedita neque nam adipisci nesciunt itaque qui voluptas ad, nemo molestias illo at laboriosam rem sequi, minima officia corrupti! Illum asperiores incidunt molestiae nulla eveniet porro earum ad sequi sit quos, optio voluptatibus eligendi, ratione saepe accusamus tempora quis assumenda iusto recusandae odit maiores, repellendus unde hic.`;

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
                    width="4"
                    height="4"
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
          <div className="grid grid-cols-1 justify-items-center homeAdjust">
            <div className="max-full text-center leading-relaxed">
              <h1 className="composedHeading">REALLY INTERESTING <span style={{ "color": "red"}}>TITLE</span></h1>
              <div className="header__underline"></div>
            </div>
            <div className="max-full text-center leading-relaxed mb-8">
              <p className="font-semibold tracking-tighter mt-8 mb-8">By: <a href="#">Paddy Ryan</a> | Category: <span className="relative z-10 rounded-full bg-red-600 px-3 py-1.5 font-medium text-white hover:bg-red-400 cursor-pointer">Tech</span> | Posted: Today</p>
              <p className="article_text max-w-5xl mx-auto">Lorem ipsum dolor, adipisicing elit. Eum saepe, quisquam commodi, similique earum facilis vitae vero quasi, dicta maxime atque veniam molestias accusantium laudantium consequatur. Nihil adipisci ratione maiores, illum perspiciatis quaerat voluptatibus quidem laudantium sequi assumenda, deserunt perferendis. Deleniti quia provident voluptate unde earum, maiores modi qui fugiat.</p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-full mb-2"
          >
          <img alt={'image alt blog'} src={'/assets/images/heart.webp'} width={1200} height={300} className="shadow-xl h-1/2 mx-auto" />
          
          {/* <Video videoEmbedCode={article ? article.articleVideoEmbed : null} /> */}
          </motion.div>
          
            <div className="py-8 flex flex-col md:flex-row">
              <div className="mx-auto w-full max-w-3xl">
                  <div dangerouslySetInnerHTML={{__html: dummy }} className={'article_text mt-8 pb-8 flex-col'}  />   
                  <div className="header__underline"></div>     
              </div>
             
            </div>
              <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
                <svg
                  className="absolute bottom-12 right-full -translate-x-32 transform"
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
            <h3 className="pb-2 font-black text-4xl last:mb-0 uppercase">RELATED <span style={{ "color": "red"}}></span> <span style={{ "color": "red"}}>ARTICLES</span>
            </h3>
            <div className="header__underline"></div>
                <div className="pt-4 grid sm:gap-4 gap-2 grid-cols-2 md:grid-cols-4">
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
