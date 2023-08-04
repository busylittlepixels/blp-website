import React from 'react'
import Link from 'next/link'

import './app.scss'

import classes from './layout.module.scss'

export const metadata = {
  title: 'BUSY LITTLE PAYLOAD PIXELS',
  description: 'Serve Payload alongside any front-end framework.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={classes.body}>
        {/* <header className={classes.header}>
        </header> */}
        {children}
      </body>
    </html>
  )
}
