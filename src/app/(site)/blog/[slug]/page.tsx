/* eslint-disable react/jsx-no-comment-textnodes */
'use client'
import Image from 'next/image'
import Link from 'next/link'
import {useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { ParsedUrlQuery } from 'querystring'
import useScrollPosition from "../../../../hooks/useScrollPosition";
import { Video } from '../../../../components/layout/Video'
import { FadeIn } from '../../../../components/shared/FadeIn';
import imageLoader from '../../../../../imageLoader';

interface IParams extends ParsedUrlQuery {
    slug: string
}

export default async function Page({ article }:any) {
    const ref = useRef(null);
    const progref = useRef();
    const [scrolled, setScrolled] = useState(false);
    const { scrollYProgress } = useScroll({ target: ref });
    const scrollPosition = useScrollPosition();
    const dummy = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in accusamus quisquam nemo nulla cupiditate iusto ullam amet maxime eius soluta, ab, maiores nobis? Corrupti ut illo voluptas optio enim fugiat accusantium error quod aliquid. <br /><br />Eligendi, temporibus. Rem temporibus a assumenda nam voluptatem aperiam alias eius repellat mollitia sit possimus officiis dolorum iste nemo est, sequi blanditiis hic atque earum vitae quos? Illum consequatur, eligendi quam, 
    fugiat amet dolores voluptates soluta quia vero ratione aliquid nostrum sunt velit earum consectetur, ea recusandae porro. Sunt ex pariatur neque molestias nulla recusandae perferendis, dolores temporibus excepturi modi. Accusantium tempore, eaque perferendis ex consequatur veritatis nobis similique, quae nihil repellat animi eius incidunt mollitia cupiditate vero dolorum expedita delectus magnam suscipit nesciunt sequi. <br /><br />Nisi minima voluptas, est, alias quam maiores voluptate quis fugiat laborum corrupti sunt enim aperiam mollitia exercitationem iste numquam dolorem dolore minus! Veniam ea voluptates saepe minus porro dolor illum aliquid a possimus eius dicta iusto quis eveniet quasi hic sapiente consequatur, fugit corporis, assumenda illo alias architecto excepturi eaque officiis. 
    Ut perspiciatis accusantium hic eius cum fugiat, at dignissimos deleniti qui laboriosam. Quisquam deserunt eaque atque totam reprehenderit corporis repellat consequuntur, minus iure, sed, nihil quidem aliquam porro possimus quam est labore dolorem itaque recusandae incidunt! Fugit neque temporibus vel nesciunt odio dolore non consequuntur aut ut, veniam hic nam magnam, inventore aspernatur molestias voluptatum necessitatibus? Aut, debitis aperiam!
    Minima, magnam illum fuga quia consequatur tenetur modi officia ipsam laudantium repellendus architecto laborum voluptate, repellat perspiciatis veniam. Quam reiciendis a assumenda aspernatur laudantium quibusdam nemo? Assumenda sunt id maiores, illo tenetur exercitationem. Accusamus facere quo deleniti a aspernatur, repudiandae at, voluptatibus, modi iusto officiis ipsum vel doloremque. Illo incidunt facilis aspernatur ex voluptatum possimus deleniti aliquid, labore, accusamus necessitatibus impedit velit culpa itaque cumque. <br /><br />
    Ad, beatae incidunt neque aperiam exercitationem quia odio. Ipsum ducimus quisquam itaque porro dolores, hic sapiente excepturi eum reiciendis culpa cupiditate tempore praesentium, et exercitationem placeat odit commodi veniam? <br /><br /><h3 class="font-black">In praesentium impedit</h3> blanditiis eum, placeat ratione doloremque hic, nemo vel ex deserunt? Quia sequi aperiam quam voluptatum 
    cumque provident mollitia perspiciatis eum quasi omnis, eius ratione et minima. Tempora molestiae qui sunt commodi, quibusdam eveniet ullam ipsum ipsam vero ea aliquid deserunt dolorem nisi voluptates libero inventore adipisci rerum doloribus, architecto, impedit dicta! Perferendis explicabo illo eaque id nostrum fugit repellendus? Tempore ad eius eveniet est quod consequuntur, quaerat sed magni fugiat earum itaque impedit accusamus aliquam consectetur assumenda voluptatibus cupiditate pariatur! <br /><br />Repellat laborum eveniet maiores nobis rerum nihil enim et, esse sapiente! Laborum natus aspernatur odio doloribus dolore voluptate repellendus labore fugit rerum quaerat magnam soluta aliquid, eligendi consequuntur maiores aperiam corporis tempora quam repudiandae quod quis nostrum et! Minus laboriosam harum aut et numquam. Obcaecati quae voluptates, magnam, dolorum necessitatibus quas fugiat officiis et tenetur impedit saepe sed libero facere fuga consequatur eius explicabo ex error optio. Sunt, voluptatum! Ullam eveniet fugiat vero rem maiores obcaecati rerum numquam laboriosam iure tempore. Provident magni inventore molestias sapiente eos voluptate in repellat. Repellat temporibus saepe illo eligendi quos vel distinctio dolores quaerat sed id magni, modi accusantium debitis ipsum. Rem commodi fuga recusandae voluptatum aut hic autem! Ipsum provident, aperiam optio voluptates quas voluptatum expedita eaque eius illum, odio necessitatibus fugit id cum voluptatem possimus, repellat ullam est error! Dolores exercitationem, consectetur eius voluptates expedita neque nam adipisci nesciunt itaque qui voluptas ad, nemo molestias illo at laboriosam rem sequi, minima officia corrupti! Illum asperiores incidunt molestiae nulla eveniet porro earum ad sequi sit quos, optio voluptatibus eligendi, ratione saepe accusamus tempora quis assumenda iusto recusandae odit maiores, repellendus unde hic? A earum, enim exercitationem voluptas provident quisquam ut deserunt ab repellat cupiditate reprehenderit deleniti praesentium itaque, ratione eaque reiciendis consectetur perspiciatis? Maxime incidunt necessitatibus aspernatur eligendi odio eveniet magni voluptatem doloribus, beatae quae sed pariatur voluptatum at eius nihil deleniti obcaecati quis aliquid accusantium aut temporibus quod consequatur architecto voluptatibus! Beatae corporis nostrum alias nihil incidunt porro iusto. Reprehenderit dolor velit optio non enim doloribus nesciunt ad, dolores quis nemo, deserunt itaque doloremque excepturi unde eius ducimus saepe adipisci earum eum odit deleniti pariatur amet incidunt! Eveniet architecto vel commodi aliquam facere. Ullam, numquam incidunt. Obcaecati tempore quasi reprehenderit officiis nesciunt facere quod impedit commodi sint id doloremque et velit vel perspiciatis reiciendis, consequuntur quos fuga similique culpa debitis voluptate odit magni. Voluptates odit libero alias non consequuntur voluptatem omnis, quo consectetur doloremque autem, placeat quidem modi maiores id asperiores ex quis officia molestias, eaque ab velit repellat ipsam in architecto? <br /><br />Odit, commodi suscipit minima dolorum eveniet asperiores maxime dolores consectetur blanditiis a dignissimos repudiandae amet modi sapiente quas quod optio nulla quae numquam. Maxime, enim fuga. Hic provident molestiae dolores officia, pariatur quidem mollitia reprehenderit quo odit, numquam minima iusto! Earum impedit cum tempore maxime aperiam repellendus. Optio qui maiores fugit iure quibusdam aspernatur! Aspernatur magni ipsa blanditiis animi rerum et molestias officiis iste, maiores qui ullam quisquam quaerat, iure adipisci impedit perspiciatis nostrum tempora nesciunt dicta aliquam! Possimus eveniet dolorem corrupti accusamus aut distinctio! Laudantium ipsa corrupti facilis. Corporis odio earum porro ipsum consequuntur enim cum asperiores quam eum est ducimus, reprehenderit ex doloremque. Necessitatibus eaque animi magnam soluta quos? Minima, in distinctio. Rerum commodi vitae iure, iste necessitatibus, animi delectus ipsum doloremque, praesentium neque unde odit reiciendis quas ducimus odio voluptatibus aliquid sapiente architecto officiis cumque. Fugit cupiditate impedit odio nobis quidem. Vel praesentium, natus veritatis, ea alias odio consectetur quae ratione nobis perspiciatis, sit reiciendis quia dolorum! Quibusdam ipsum cumque consequuntur quos hic a ab saepe cum labore iste nihil assumenda esse illo ipsam eligendi dolor aut, facere, laudantium quae! Eligendi dolorem repellendus qui ea corrupti dignissimos iste optio impedit necessitatibus, pariatur et laboriosam eveniet. Architecto, quasi voluptates? Repellat, corporis maxime vero molestias debitis fugit voluptate, eaque aliquid porro atque vel. Numquam quisquam aut officia cumque harum veritatis porro minus voluptatem laborum! Laudantium voluptate illo id numquam enim porro iusto nobis consectetur totam, omnis libero dolore inventore laboriosam tenetur minima rerum saepe! Incidunt soluta doloremque sit vitae error fuga laborum iure eveniet corporis libero dolorum, voluptate ipsam ipsum quisquam quo omnis dolore tenetur debitis illo.`;
    
    useEffect(() => {
      
        if(scrollPosition > 100){
          setScrolled(true);
        } else {
          setScrolled(false);
        }

    })

    return(

        <>
      <FadeIn>
        <main className={`blog`}>
          <div id="prog_id" className={!scrolled ? `opacity-0` : `opacity-100 transition-all duration-300 ease-in-out`}>
            {/* // @ts-ignore */}
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} >       
              <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="30"
                  pathLength="1"
                  className="indicator"
                  style={{ pathLength: scrollYProgress }}
                />
              </svg>  
            </motion.div> 
          </div> 
          <section className="px-6 md:pb-32 bg-white pb-0 md:pb-0">
          <div className="grid grid-cols-1 justify-items-center gap-10 homeAdjust mb-2">
            <div className="max-full text-center leading-relaxed">
              <h1 className="composedHeading">{article ? article.articleTitle : `REALLY INTERESTING TITLE`}</h1>
            </div>
            <div className="max-full text-center leading-relaxed mb-8">
              <p className="font-semibold tracking-tighter mb-4">By: <a href="#">Paddy Ryan</a> | Category: Tech | Published: Today</p>
              <p className="article_text max-w-5xl mx-auto">Lorem ipsum dolor, adipisicing elit. Eum saepe, quisquam commodi, similique earum facilis vitae vero quasi, dicta maxime atque veniam molestias accusantium laudantium consequatur. Nihil adipisci ratione maiores, illum perspiciatis quaerat voluptatibus quidem laudantium sequi assumenda, deserunt perferendis. Deleniti quia provident voluptate unde earum, maiores modi qui fugiat.</p>
            
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-full mb-2"
          >
          <Image alt={article ? article.articleImageAlt : null} src={article ? article.articleImageUrl : '/assets/images/heart.jpeg'} width={1200} height={300} loader={imageLoader} className="shadow-xl h-1/2 mx-auto" />
          
          {/* <Video videoEmbedCode={article ? article.articleVideoEmbed : null} /> */}
          </motion.div>
             
          <div className="py-8 flex flex-col md:flex-row">
            <div className="mx-auto w-full max-w-3xl">
                <div className="leading-relaxed">
                  {article ? <p style={{ "lineHeight": "2.5rem", "fontSize": "20px", "display": "flex", "fontWeight": "bold", "textAlign": "justify" }} className="article_text text-md leading-8">{article.articleExcerpt.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "")}</p>: '' }
                </div>

                <div dangerouslySetInnerHTML={{__html: article ? article.articleContent : dummy }} className={'article_text mt-8 flex-col'}  />
                
            </div>
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
                  <img alt="" sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem" src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" width="576" height="576" decoding="async" data-nimg="1" className="absolute inset-0 h-full w-full object-cover" loading="lazy" style={{ "color": "transparent"}} />
                </div>
                <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32 rounded">
                    
                    <p className="mt-8 font-display font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                      <span className="block text-red-600">Paddy Ryan –</span> Hey there, I’m the author behind 'Through the Keystroke'.</p>
                    <p className="mt-4 text-md tracking-tight text-slate-700 article_text">I’ve been designing and developing professionally for over a decade and have worked with dozens of the biggest brands to create custom sets for their products. I’ve worked with devel of all skill levels and honed my way of teaching to really click for anyone who has the itch to start designing their own icons.</p>
                </div>
                </div>
            </div>
        </section>
          
        <section className="px-6 py-20 md:py-20 bg-white">
          <h3 className="pb-8 font-black text-4xl mb-6 last:mb-0 border-b border-gray-200 uppercase">RELATED <span style={{ "color": "red"}}></span> <span style={{ "color": "red"}}>ARTICLES</span></h3>
              
                <div className="grid sm:gap-2 gap-2 grid-cols-2 md:grid-cols-4">
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

