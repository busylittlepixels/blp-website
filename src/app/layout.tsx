import React from 'react'

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
        {children}
      </body>
    </html>
  )
}
