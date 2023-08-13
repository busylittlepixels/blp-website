import React from 'react'
import Link from 'next/link'
import tw from 'tailwind-styled-components'

import '../styles/globals.css'

const Notice = tw.div`
  text-center bg-red-600 text-white text-4xl font-black py-8 mb-4
`

export const metadata = {
  title: 'BUSYLITTLEPIXELS',
  description: 'Fractional CTO & Future-Facing Web and Application Development.',
}


// async function getNavigation(){
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/mainMenu`
//   )
//   return res.json();
// }


export default async function RootLayout({ children }: { children: React.ReactNode }) {

  // const nav = await getNavigation();
  
  return (
    <html lang="en">
      <body>
        <Notice>HERE'S AN OBNOXIOUSLY DISTRACTING CTA!</Notice>
        {children}
      </body>
    </html>
  )
}
