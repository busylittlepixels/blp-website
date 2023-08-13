import React from 'react'
export const metadata = {
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
      <head />
      <body>{children}</body>
    </html>
  )
}