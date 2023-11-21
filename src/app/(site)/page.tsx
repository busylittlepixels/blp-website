import React from 'react'
import { notFound } from 'next/navigation'
import { Page } from '../../payload/payload-types'
import { Team } from '../../components/layout/Team'
import { TitleContainer } from '../../components/layout/TitleContainer'
import { RenderBlocks } from '../../components/layout/RenderBlocks'
import { GalleryGrid } from '../../components/layout/GalleryGrid'
import { FadeIn } from '../../components/shared/FadeIn'
import { Testimonials } from '../../components/layout/Testimonials'

export default async function Home() {
	const home: Page = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=home&depth=2`,
	)
		.then(res => res.json())
		.then(res => res?.docs?.[0])

	if (!home) {
		return notFound()
	}

	const { subtitle, layout } = home

	return (
		<main className={'page'}>
			<FadeIn>
				<TitleContainer title={'little'} subtitle={'ass'} />
				<GalleryGrid />
				<RenderBlocks content={layout} />
				<Team />
				<Testimonials />
			</FadeIn>
		</main>
	)
}
