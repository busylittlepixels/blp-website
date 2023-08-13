import { Nav } from '../../components/shared/Nav'
import { Footer } from '../../components/shared/Footer'

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
        {children}
      <Footer />
    </div>
  )
}

export default SiteLayout