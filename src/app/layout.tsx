import React from 'react'
import Link from 'next/link'
import tw from 'tailwind-styled-components'

import '../styles/globals.css'


import { Nav } from '../components/shared/Nav'
import { Footer } from '../components/shared/Footer'


const Notice = tw.div`
  text-center bg-red-300 text-white text-4xl font-black py-8 max-sm:mt-20
`

export const metadata = {
  title: 'BUSYLITTLEPIXELS',
  description: 'Fractional CTO & Future-Facing Web and Application Development.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
          {children}
        <Footer />
      </body>
    </html>
  )
}
