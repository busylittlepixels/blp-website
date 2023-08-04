/* eslint-disable no-console */
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Page } from '../../payload-types'
import { Gutter } from '../components/Gutter'
import { RenderBlocks } from '../components/RenderBlocks'
// import { RichText } from '../_components/RichText'

import classes from '../page.module.scss'

export default async function About() {
  const about: Page = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=about&depth=2`,
    { next: { revalidate: 10 } },
  )
    .then(res => res.json())
    .then(res => res?.docs?.[0])
  
  if (!about) {
    return notFound()
  }
  
  const { layout, subtitle, richText } = about
  
  return (
    <>
      <main className={classes.main}>
        <Link href={'/'}>Home</Link>
        <Gutter>
          <div className={classes.body}>
            <p>{subtitle}</p>
            <h3 className="font-bold text-2xl">{richText[0].children[0].text}</h3>
          </div>
        </Gutter>
        <RenderBlocks content={layout} />
      </main>
    </>
  )
}
