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
        link: 'About Us',
        href: '/about-us',
        pageLink: '/about-us',
        label: 'About Us'
    },
    {
        link: 'Services',
        href: '/services',
        pageLink: '/services',
        label: 'Services'
    },
    {
        link: 'Studio',
        href: '/studio',
        pageLink: '/studio',
        label: 'Studio'
    },
    {
        link: 'Blog',
        href: '/blog/future-of-web-development',
        pageLink: '/blog/future-of-web-development',
        label: 'Blog'
    },
    // {
    //     link: 'Mission',
    //     href: '/our-mission',
    //     pageLink: '/our-mission',
    //     label: 'Mission'
    // },
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