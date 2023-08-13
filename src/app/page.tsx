import { notFound } from 'next/navigation'
import { Page } from './../payload/payload-types'
import { Team } from '../components/layout/Team'
import { TitleContainer } from '../components/layout/TitleContainer'
import { RenderBlocks } from '../components/layout/RenderBlocks'
import { GalleryGrid } from '../components/layout/GalleryGrid'
import { Stuff } from '../components/layout/Stuff'
import { FadeIn } from '../components/shared/FadeIn'

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
        <TitleContainer title={'little'} subtitle={subtitle}/>
        {/* <GalleryGrid /> */}
        <RenderBlocks content={layout} />
        <Stuff />
        <Team />
      </main>
    </FadeIn>
  )
}
