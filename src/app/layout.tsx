import React from 'react'
export const metadata = {
  title: 'Busy Little Pixels | Fractional CTO Services & Web Development',
  description: 'Fractional CTO experts. Headless web and app development, devops, project management, digital strategy, media and events',
  keywords: 'Fractional CTO, CTO, Tech Lead, Business Lead, Online Strategy, Mobile Apps, NextJS, Craft CMS, Strapi',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: { 
      type: "website", 
      url: `https://busylittlepixels.com`, 
      title: `Busy Little Pixels | Fractional CTO Services & Web Development`,
      description: `Fractional CTO experts. Headless web and app development, devops, project management, digital strategy, media and events`,
      siteName: "Busy Little Pixels",
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}