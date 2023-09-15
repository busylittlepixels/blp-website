import Wrapper from '../../components/layout/Wrapper'
import tw from 'tailwind-styled-components'

const Notice = tw.div`
  text-center bg-red-600 text-white text-4xl font-black py-8 mb-4
`

const SiteLayout = async ({ children }: { children: React.ReactNode }) => {
  
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default SiteLayout