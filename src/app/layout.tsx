import React from 'react'
export const metadata = {
  metadataBase: new URL('https://busylittlepixelsv2.vercel.app/'),
  title: 'BUSYLITTLEPIXELS',
  description: 'Fractional CTO & Future-Facing Web and Application Development.',
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