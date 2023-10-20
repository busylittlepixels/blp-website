/* eslint-disable no-console */
import React from 'react'
import { notFound } from 'next/navigation'
import { Page } from '../../../payload/payload-types'
// import { RenderBlocks } from '../../../components/layout/RenderBlocks'
import { Services } from '../../../components/layout/Services'
import { Overlap } from '../../../components/layout/Overlap'
import { FadeIn } from '../../../components/shared/FadeIn'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Services | Busy Little Pixels',
  description: 'Services - We are Fractional CTO experts. Headless web and app development, devops, project management, digital strategy, media and events',
}


export default async function ServicesPage() {
  
  const services: Page = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=services&depth=2`,
    { next: { revalidate: 10 } },
  )
    .then(res => res.json())
    .then(res => res?.docs?.[0])
  
  if (!services) {
    return notFound()
  }
  
  const { layout } = services
  
  return (
    <>
      <FadeIn>
        <main className={`services`}>
          <div className="bg-white px-6 lg:px-8 mt-20">
            <div className="mx-auto max-w-3xl text-base leading-7 text-black">
                <h3 className="font-black text-4xl md:text-6xl mb-6 last:mb-0 uppercase">WHY DO I NEED A <span style={{"color":"red"}}>FRACTIONAL CTO?</span></h3>
                <div className="header__underline"></div>

                <div className="md:px-8">
                  <p className="contact_intro pt-6 mx-auto mb-6 max-w-3xl md:px-6 lg:px-8">In today's rapidly evolving technological landscape, organizations are constantly seeking innovative ways to leverage technology for growth and competitive advantage. To navigate these complexities, many companies are turning to Fractional Chief Technology Officers (CTOs). This essay explores the function and work of a Fractional CTO, shedding light on their valuable role in transforming technology leadership.</p>
                  <div className="mt-4 max-w-3xl">
                    <p className="contact_intro mx-auto mb-6 max-w-3xl md:px-6 lg:px-8">A Fractional CTO is an experienced technology executive who works with companies on a part-time or project basis, providing strategic guidance and leadership in technology-related matters. Unlike a full-time CTO, a Fractional CTO offers their expertise and services to multiple organizations simultaneously, bringing a wealth of knowledge from diverse industries and projects.</p>
                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-400 px-6">
                      <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-red-600"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg><span><strong className="font-semibold text-gray-900">Strategic Technology Planning.</strong></span></li>
                      <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-red-600"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg><span><strong className="font-semibold text-gray-900">Leadership and Team Development.</strong></span></li>
                      <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-red-600"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg><span><strong className="font-semibold text-gray-900">Technology Infrastructure and Architecture.</strong></span></li>
                    </ul>
                    <p className="contact_intro pt-6 mx-auto mb-6 max-w-3xl md:px-6 lg:px-8">A Fractional CTO is an experienced technology executive who works with companies on a part-time or project basis, providing strategic guidance and leadership in technology-related matters. Unlike a full-time CTO, a Fractional CTO offers their expertise and services to multiple organizations simultaneously, bringing a wealth of knowledge from diverse industries and projects.</p>
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Fast track the growth of your tech.</h2>
                    <p className="contact_intro pt-6 mx-auto mb-6 max-w-3xl md:px-6 lg:px-8">One of the primary functions of a Fractional CTO is to develop and execute strategic technology plans aligned with the organization's business goals. They work closely with the executive team to understand the company's vision, identify technological opportunities, and create a roadmap for implementation. By aligning technology initiatives with business objectives, the Fractional CTO ensures that technology investments deliver maximum value and support long-term growth.</p>
                    <p className="contact_intro pt-6 mx-auto mb-6 max-w-3xl md:px-6 lg:px-8">In an era of increasing cybersecurity threats and data privacy concerns, the Fractional CTO plays a critical role in technology risk management. They assess potential risks, develop security protocols, and ensure compliance with industry standards and regulations. By proactively addressing security vulnerabilities and implementing robust risk mitigation strategies, the Fractional CTO safeguards the organization's technology assets and minimizes potential disruptions.</p></div><figure className="mt-16"><img className="aspect-video rounded-xl bg-gray-50 object-cover shadow-md" src="/assets/images/heart.webp" alt="" /><figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gray-300"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>Faucibus commodo massa rhoncus, volutpat.</figcaption></figure>
                    <div className="mt-16 max-w-3xl">
                      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Everything you need to get up and running</h2>
                      <p className="contact_intro pt-6 mx-auto mb-6 max-w-3xl md:px-6 lg:px-8">The role of a Fractional CTO has become indispensable for companies seeking to harness technology for growth and competitiveness. Their strategic guidance, technical expertise, and leadership capabilities empower organizations to make informed technology decisions, drive innovation, and navigate the complexities of the digital landscape. By engaging a Fractional CTO, businesses can leverage the benefits of executive-level technology leadership without the full-time commitment, making it a valuable and cost-effective solution for organizations of all sizes and industries.</p>
                    </div>
                  </div>
                </div>
            <br />
            <br />
          </div>
          <Services />
          <Overlap />
        </main>
      </FadeIn>
    </>

  )
}