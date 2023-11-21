import React from 'react'
// app/layout.js

import GoogleAnalytics from './GoogleAnalytics'
// @ts-ignore
import { GoogleTagManager } from '@next/third-parties/google'
import { PHProvider } from './providers'
import CookieBanner from './../components/layout/CookieBanner'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
	metadataBase: new URL('https://busylittlepixels.com'),
	title: 'Busy Little Pixels | Fractional CTO Services & Web Development',
	description:
		'Busy Little Pixels | We are Fractional CTOs, specialising in roadmapping your technical projects, web and custom app development, devops, project management, digital strategy, media and eCommerce.',
	keywords:
		'Fractional CTO, CTO, Tech Lead, Business Lead, Online Strategy, Mobile Apps, NextJS, PayloadCMS, Craft CMS, Svelte',
	url: 'https://busylittlepixels.com',
	images: [
		{
			url: 'https://busylittlepixels.com/assets/images/heart.webp',
			width: 800,
			height: 600,
		},
		{
			url: 'https://busylittlepixels.com/assets/images/heart.webp',
			width: 1800,
			height: 1600,
			alt: 'Busy Little Pixels | Fractional CTO Services & Web Development',
		},
	],

	openGraph: {
		type: 'website',
		url: 'https://busylittlepixels.com',
		title: `Busy Little Pixels | Fractional CTO Services & Web Development`,
		description: `Busy Little Pixels | We are Fractional CTOs, specialising in roadmapping your technical projects, web and custom app development, devops, project management, digital strategy, media and eCommerce.`,
		siteName: 'Busy Little Pixels',
		images: [
			{
				url: 'https://busylittlepixels.com/assets/images/heart.webp',
				width: 800,
				height: 600,
			},
			{
				url: 'https://busylittlepixels.com/assets/images/heart.webp',
				width: 1800,
				height: 1600,
				alt: 'Busy Little Pixels | Fractional CTO Services & Web Development',
			},
		],
	},
}

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang={'en'}>
			<PHProvider>
				<body>
					<GoogleAnalytics />
					{children}
					<Analytics />
				</body>
				<CookieBanner />
				<GoogleTagManager gtmId="GTM-KT6SVVXZ" />
			</PHProvider>
		</html>
	)
}
