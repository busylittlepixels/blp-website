import React, { Fragment } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Page } from './../payload-types'
import { Gutter } from './_components/Gutter'
import { RichText } from './_components/RichText'

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

  // eslint-disable-next-line no-console
  console.log(home.layout)
  return (
    <Fragment>
      <main className={classes.main}>
        <Link href={'/about'}>Link to subdir</Link>
        <p>{home.subtitle}</p>
        <Gutter>
          <div className={classes.body}>
            <RichText content={home.richText} />
          </div>
        </Gutter>
        <p>{home.onemore}</p>
      </main>
    </Fragment>
  )
}
