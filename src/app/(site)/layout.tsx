import { Nav } from '../../components/shared/Nav'
import { Footer } from '../../components/shared/Footer'

import tw from 'tailwind-styled-components'

import '../styles/globals.css'

const Notice = tw.div`
  text-center bg-red-600 text-white text-4xl font-black py-8 mb-4
`

const nav = [
    {
        link: 'About',
        href: '/about',
        pageLink: '/about',
        label: 'About'
      }
    ]

const SiteLayout = async ({ children }: { children: React.ReactNode }) => {

  
  return (
    <div>
        <Nav menu={nav}/>
        <Notice>HERE'S AN OBNOXIOUSLY DISTRACTING CTA!</Notice>
        {children}
      <Footer />
    </div>
  )
}

export default SiteLayout