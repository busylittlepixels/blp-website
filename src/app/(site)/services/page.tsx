/* eslint-disable no-console */
import React from 'react'
import { notFound } from 'next/navigation'
import { Page } from '../../../payload/payload-types'
// import { RenderBlocks } from '../../../components/layout/RenderBlocks'
import { Services } from '../../../components/layout/Services'
import { Overlap } from '../../../components/layout/Overlap'
import { FadeIn } from '../../../components/shared/FadeIn'
import { Metadata } from 'next'
import { RichText } from '../../../components/layout/RichText'

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
                  <RichText content={services.richText} className={`flex flex-col mt-5 text-sm leading-6 text-gray-600 article_text`} />
                </div> 
              </div>
            </div> 
          <Services />
          <Overlap />
        </main>
      </FadeIn>
    </>

  )
}