import React from 'react'
import Link from 'next/link'
import tw from 'tailwind-styled-components';

import '../styles/globals.css'
import './app.scss'


const Notice = tw.div`
  text-center text-red-300 text-4xl font-black py-8
`;



import classes from './layout.module.scss'

export const metadata = {
  title: 'BUSY LITTLE PIXELS',
  description: 'Fractional CTO & Future-Facing Web and Application Development.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={classes.body}>
        <Notice>HEAR YE! HEAR YE!</Notice>
        {children}
      </body>
    </html>
  )
}
