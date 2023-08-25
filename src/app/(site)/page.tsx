import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import { Page } from '../../payload/payload-types'
import { Team } from '../../components/layout/Team'
// import { RenderBlocks } from '../../components/layout/RenderBlocks'
import { FadeIn } from '../../components/shared/FadeIn'

const TitleContainer = dynamic(() => import('../../components/layout/TitleContainer')); 
const GalleryGrid = dynamic(() => import('../../components/layout/GalleryGrid')); 
const RenderBlocks = dynamic(() => import('../../components/layout/RenderBlocks')); 

export default async function Home() {
  const home: Page = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=home&depth=2`,
    { next: { revalidate: 10 } },
  )
    .then(res => res.json())
    .then(res => res?.docs?.[0])

  if (!home) {
    return notFound()
  }

  const { subtitle, layout } = home
  
  return (  
    <FadeIn>
      <main className={'page'}>
        <TitleContainer title={'little'} subtitle={'ass'}/>
        <GalleryGrid />
        <RenderBlocks content={layout} />
        <Team />
      </main>
    </FadeIn>
  )
}
