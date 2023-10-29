import React from 'react'
// app/layout.js
import { PHProvider } from './providers'
import CookieBanner from './../components/layout/CookieBanner'
import { Analytics } from '@vercel/analytics/react';


export const metadata = {
	metadataBase: new URL('https://busylittlepixels.com'),
	title: 'Busy Little Pixels | Fractional CTO Services & Web Development',
	description: 'Fractional CTO experts. Headless web and app development, devops, project management, digital strategy, media and events',
	keywords: 'Fractional CTO, CTO, Tech Lead, Business Lead, Online Strategy, Mobile Apps, NextJS, PayloadCMS, Craft CMS, Svelte',
	url: "https://busylittlepixels.com", 
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
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1,
	},

	openGraph: { 
		type: "website", 
		url: "https://busylittlepixels.com", 
		title: `Busy Little Pixels | Fractional CTO Services & Web Development`,
		description: `Busy Little Pixels | We are Fractional CTOs, specialising in roadmapping your technical projects, web and custom app development, devops, project management, digital strategy, media and eCommerce.`,
		siteName: "Busy Little Pixels",
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
	}
}


export default function RootLayout({
	children,
}: {
	children: React.ReactNode
	}) {
	return (
		<html lang={'en'}>
			<PHProvider>
				<body>
					{children}
					<Analytics />	
				</body>
				<CookieBanner />
			</PHProvider>
		</html>
	)
}

