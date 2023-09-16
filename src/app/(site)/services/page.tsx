/* eslint-disable no-console */
import React from 'react'
import { notFound } from 'next/navigation'
import { Page } from '../../../payload/payload-types'
// import { RenderBlocks } from '../../../components/layout/RenderBlocks'
import { Services } from '../../../components/layout/Services'
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
          <Services />
        </main>
      </FadeIn>
    </>

  )
}