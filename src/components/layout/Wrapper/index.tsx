import { Nav } from '../../shared/Nav'
import { Footer } from '../../shared/Footer'
import tw from 'tailwind-styled-components'

const Notice = tw.div`
  text-center bg-red-600 text-white text-4xl font-black py-8 mb-4
`
type Props = {
    children: React.ReactNode
}


const nav = [
    {
        link: 'About',
        href: '/about',
        pageLink: '/about',
        label: 'About'
    },
    {
        link: 'What We Do',
        href: '/what-we-do',
        pageLink: '/what-we-do',
        label: 'What We Do'
    },
    {
        link: 'Contact',
        href: '/contact',
        pageLink: '/contact',
        label: 'Contact'
    }
]

export const Wrapper = ({
    children,
  }: Props): React.ReactElement => {

    return(
        <>
            <Nav menu={nav}/>
            {/* <Notice>HERE'S AN OBNOXIOUSLY DISTRACTING CTA!</Notice> */}
                {children}
            <Footer />
        </>
    
    )
}

export default Wrapper