/* eslint-disable no-console */
import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Page } from '../../../payload/payload-types'
import { RenderBlocks } from '../../../components/layout/RenderBlocks'
import { Services } from '../../../components/layout/Services'
import { Team } from '../../../components/layout/Team'
import { FadeIn } from '../../../components/shared/FadeIn'
import { Metadata } from 'next'
import { RichText } from '../../../components/layout/RichText'

export const metadata: Metadata = {
  title: 'About Us | Busy Little Pixels',
  description: 'About Us - We are Fractional CTO experts. Headless web and app development, devops, project management, digital strategy, media and events',
}


export default async function About() {
  
  const about: Page = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=about-us&depth=2`,
    { next: { revalidate: 10 } },
  )
    .then(res => res.json())
    .then(res => res?.docs?.[0])
  
  if (!about) {
    return notFound()
  }
  
  const { layout } = about
  
  return (
    <>
      <FadeIn>
        <main className={`about`}>
          <Team headline={about.title}/>
          {/* /<div className="isolate bg-white"><section data-collapsible="true" className="px-6 py-20 md:py-32 py-20 md:py-32 override mb-6"><div className="mx-auto w-full max-w-6xl"><h1 className="pb-4 font-black text-4xl md:text-6xl last:mb-0 uppercase max-w-3xl mx-auto">ABOUT <span style={{"color": "red;"}}>US...</span><div className="header__underline pt-2"></div></h1><p className="contact_intro pt-6 mx-auto mb-6 max-w-3xl md:px-6 lg:px-8">We are a dynamic fractional CTO company founded by a team of experienced professionals who have walked the path of CTOs, Tech Leads, Developers, and Marketing Specialists. With our studios in the vibrant city of Amsterdam and headquarters in the bustling tech hub of Dublin, we bring together a wealth of expertise and a passion for driving technological innovation.</p><p className="contact_intro mx-auto mb-6 max-w-3xl md:px-6 lg:px-8">At Busy Little Pixels, we understand the challenges faced by businesses in today's fast-paced digital landscape. Our founders have accumulated years of hands-on experience across various industries, working on groundbreaking projects that have transformed businesses and pushed the boundaries of technology. We thrive on delivering exceptional results, providing tailored solutions that align with our clients' unique goals and aspirations. Whether you need strategic guidance, technical expertise, or a comprehensive technology roadmap, our team of fractional CTOs is here to empower your business and accelerate its growth. Join us on this exciting journey as we harness the power of pixels to unlock your full digital potential.</p></div></section><br><br><div className="bg-black py-24 sm:py-32 overflow-hidden"><div className="hidden md:block relative mx-auto h-full max-w-prose text-lg" aria-hidden="true"><svg className="absolute left-full transform" width="400" height="384" fill="none" viewBox="0 0 400 384"><defs><pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect></pattern></defs><rect width="400" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"></rect></svg></div><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mx-auto max-w-2xl lg:mx-0"><h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl uppercase mb-4">MEET THE <span style={{"color": "red"}}>TEAM...</span></h1><div className="header__underline"></div><p className="mt-6 text-lg leading-8 text-gray-300">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p></div><ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-3 relative z-10"><li><img className="aspect-[14/13] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80" alt="" /><h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">Paddy Ryan</h3><p className="text-base leading-7 text-gray-300">Co-Founder &amp; CEO</p><p className="text-sm leading-6 text-gray-500">Dublin, Ireland</p></li><li><img className="aspect-[14/13] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80" alt="" /><h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">Ronanio Fantastico</h3><p className="text-base leading-7 text-gray-300">Co-Founder &amp; CTO</p><p className="text-sm leading-6 text-gray-500">Amsterdam, The Netherlands</p></li><li><img className="aspect-[14/13] w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80" alt="" /><h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">Marieke Van Der Nietreale</h3><p className="text-base leading-7 text-gray-300">Head of Brand</p><p className="text-sm leading-6 text-gray-500">Amsterdam, The Netherlands</p></li></ul></div></div><section className="text-black relative mt-2 mb-2" id="contact"><div className="absolute inset-0 bg-gray-300"><iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77979.83662249324!2d4.833920986955999!3d52.35464494712458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam!5e0!3m2!1sen!2snl!4v1673131081468!5m2!1sen!2snl" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe></div><div className="container px-5 py-24 mx-auto flex"><div className="lg:w-1/3 md:w-2/3 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"><h2 className="text-black text-lg mb-1 font-black uppercase">Contact <span style={{"color": "red"}}> US...</span></h2><div className="header__underline"></div><p className="leading-relaxed mt-5 text-black">To contact us, please add your email address and message below.</p><form className="py-4 space-y-4"><div className="relative mb-4"><label for="name" className="leading-7 text-sm text-black" style="cursor: none;">Your Name</label><input id="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required="" type="text" value="" name="name" style={{"cursor: "none"}} /></div><div className="relative mb-4"><label for="email" className="leading-7 text-sm text-black" style="cursor: none;">Email</label><input id="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required="" type="email" value="" name="email" style="cursor: none;"></div><div className="relative mb-4"><label for="message" className="leading-7 text-sm text-black" style="cursor: none;">Message</label><textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required="" style="cursor: none;"></textarea></div><button className="w-full btn btn-red btn-lg md:w-auto" style="cursor: none;">SUBMIT</button><p className="text-xs text-white-500 mt-3">We will not pass your data to third parties.</p></form></div></div></section></div> */}
          <section className="w-full boundedContainer">
            <section className="relative lg:px-8 lg:pt-20">
              <div className="mx-auto max-w-prose text-lg">
                <div className="mx-auto w-full max-w-6xl">
                  <h1 className="pb-4 font-black text-4xl md:text-6xl last:mb-0 uppercase max-w-3xl mx-auto">OUR CORE <span style={{"color":"red"}}>VALUES</span>
                    <div className="header__underline"></div>
                  </h1>
                  <RichText content={about.richText} className={`flex flex-col mt-5 text-sm leading-6 text-gray-600 article_text`} />
                  {/* <figure className="mb-16 shiney-wrapper shine"><img className="aspect-video rounded-xl bg-gray-50 object-cover shadow-md" src="/assets/images/heart.webp" alt="" /></figure>
                  <h2 className="pb-4 font-black text-3xl md:text-4xl last:mb-0 uppercase max-w-3xl mx-auto">European Roots, <span style={{"color":"red"}}>Global Vision</span></h2>
                  <p className="contact_intro mx-auto mb-6 max-w-3xl md:px-6 lg:px-8">Positioned at the gateway to Europe, we’re at the crossroads of innovation, drawing inspiration from our distributed bases across Europe, but our reach is global</p>
                  <figure className="my-8 shiney-wrapper shine"><img className="aspect-video rounded-xl bg-gray-50 object-cover shadow-md" src="/assets/images/connected-europe.png" alt="" /></figure>

                  <br/>
                  <h2 className="pb-4 font-black text-3xl md:text-4xl last:mb-0 uppercase max-w-3xl mx-auto">Your Challenges, <span style={{"color":"red"}}>Our Solutions</span></h2>
                  <p className="contact_intro mx-auto mb-6 max-w-3xl md:px-6 lg:px-8">We pride ourselves on crafting solutions tailored to your unique needs, ensuring that what we create for you stands out in the digital wilderness.</p><br />
                  <figure className="mb-8 shiney-wrapper shine"><img className="aspect-video rounded-xl bg-gray-50 object-cover shadow-md" src="/assets/images/solutions.png" alt="" /></figure> */}
{/* 
                  <br />
                  <h2 className="pb-4 font-black text-3xl md:text-4xl last:mb-0 uppercase max-w-3xl mx-auto">Trust and <span style={{"color":"red"}}>Transparency</span></h2>
                  <p className="contact_intro mx-auto mb-6 max-w-3xl md:px-6 lg:px-8">Our partnerships are built on a foundation of trust. We’re committed to transparency at every step, ensuring you{'’'}re always in the loop.</p>
                  <figure className="mt-16 shiney-wrapper shine"><img className="aspect-video rounded-xl bg-gray-50 object-cover shadow-md" src="/assets/images/heart.webp" alt="" /></figure>


                  <br /><br />
                  <h2 className="pb-4 font-black text-3xl md:text-4xl last:mb-0 uppercase max-w-3xl mx-auto">We guide you to your <span style={{"color":"red"}}>digital goals</span></h2>
                  <p className="contact_intro mx-auto max-w-3xl md:px-6 lg:px-8">At BLP, we{'’'}re not just about building websites or offering guidance; we’re about crafting digital journeys. Let us be your compass in the vast digital sea, guiding you towards uncharted territories of success and innovation.
                    Come with us. Dare to dream. Dare to innovate. With BLP by your side, the future is vibrant. <br/>
                  </p>
                  <p className='mx-auto mb-6 max-w-3xl md:px-6 lg:px-8 text-gray-600'><br/>
                    To learn more, check out our <Link href={'/services'} className='text-red'>services</Link> page.</p> */}
                </div>
              </div>
            </section>
          </section>
          <RenderBlocks content={layout} />      
        </main>
      </FadeIn>
    </>

  )
}


