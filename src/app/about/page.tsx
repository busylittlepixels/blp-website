/* eslint-disable no-console */
import React, { Fragment } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Page } from '../../payload-types'
import { Gutter } from '../_components/Gutter'
import { PageBlocks } from '../_components/PageBlocks'
import { RichText } from '../_components/RichText'

import classes from '../page.module.scss'

export default async function About() {
  const about: Page = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=about&depth=2`,
    { next: { revalidate: 10 } },
  )
    .then(res => res.json())
    .then(res => res?.docs?.[0])

  return (
    <Fragment>
      <main className={classes.main}>
        <Link href={'/'}>Home</Link>
        <Gutter>
          <div className={classes.body}>
            <p>{about.subtitle}</p>
            <h3 className="font-bold text-2xl">{about.headline}</h3>
          </div>
        </Gutter>
        <p>{about.blah}</p>
        <PageBlocks content={about.layout} />
      </main>
    </Fragment>
  )
}
