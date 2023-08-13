/* eslint-disable no-console */
import { notFound } from 'next/navigation'
import { Page } from '../../../payload/payload-types'
import { RenderBlocks } from '../../../components/layout/RenderBlocks'
import { FadeIn } from '../../../components/shared/FadeIn'

export default async function Page({ params }) {
  const page: Page = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=${params.slug}&depth=2`,
    { next: { revalidate: 10 } },
  )
    .then(res => res.json())
    .then(res => res?.docs?.[0])
  
  if (!page) {
    return notFound()
  }
  
  const { layout } = page
  
  return (
    <FadeIn>
      <main className={`page`}>
        <RenderBlocks content={layout} />
        <p>Page</p>
      </main>
    </FadeIn>
  )
}
