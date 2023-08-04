import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Page } from './../payload-types'
import { Gutter } from './components/Gutter'
import { RichText } from './components/RichText'
import { RenderBlocks } from './components/RenderBlocks'

import classes from './page.module.scss'

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

  const { subtitle, richText, layout } = home
  
  return (
    <>
      <main className={classes.main}>
        <Link href={'/about'}>Link to subdir</Link>
        <Link href={'/test-page'}>Inner</Link>
        <p>{subtitle}</p>
        <Gutter>
          <div className={classes.body}>
            <RichText content={richText} />
          </div>
        </Gutter>
        <RenderBlocks content={layout} />
      </main>
    </>
  )
}
