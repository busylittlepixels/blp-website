/* eslint-disable no-console */

import { notFound } from 'next/navigation'
import { Page } from '../../payload/payload-types'
import { RenderBlocks } from '../../components/layout/RenderBlocks'
import { FadeIn } from '../../components/shared/FadeIn'

export default async function About() {
  // const about: Page = await fetch(
  //   `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=about&depth=2`,
  //   { next: { revalidate: 10 } },
  // )
  //   .then(res => res.json())
  //   .then(res => res?.docs?.[0])
  
  // if (!about) {
  //   return notFound()
  // }
  
  // const { layout } = about
  
  return (
    <FadeIn>
      <main className={`about`}>
        {/* <RenderBlocks content={layout} /> */}
      </main>
    </FadeIn>
  )
}
