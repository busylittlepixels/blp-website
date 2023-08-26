/* eslint-disable no-console */
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import { Page } from '../../../payload/payload-types'
import { RenderBlocks } from '../../../components/layout/RenderBlocks'

const FadeIn = dynamic(() => import('../../../components/shared/FadeIn')); 

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
    <>
    
        <main className={`general_page`}>   
          <FadeIn>
            <RenderBlocks content={layout} />
          </FadeIn>
        </main>
      
    </>
  )
}
