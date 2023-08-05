/* eslint-disable no-console */
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Page } from '../../payload-types'
import { Gutter } from '../../components/layout/Gutter'
import { RenderBlocks } from '../../components/layout/RenderBlocks'
// import { RichText } from '../_components/RichText'

import classes from '../page.module.scss'

export default async function Page({ params }) {
    console.log(params.slug);
  const page: Page = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=${params.slug}&depth=2`,
    { next: { revalidate: 10 } },
  )
    .then(res => res.json())
    .then(res => res?.docs?.[0])
  
  if (!page) {
    return notFound()
  }
  
  const { layout, subtitle, richText } = page
  
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
