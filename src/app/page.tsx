import { notFound } from 'next/navigation'
import { Page } from './../payload-types'
import { Team } from '../components/layout/Team'
import { TitleContainer } from '../components/layout/TitleContainer'
import { Contact } from '../components/layout/Contact'
import { RenderBlocks } from '../components/layout/RenderBlocks'

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
      <main className={'page'}>
        <TitleContainer title={'little'} subtitle={subtitle}/>
        <RenderBlocks content={layout} />
        <Team />
        <Contact />
      </main>
  )
}
