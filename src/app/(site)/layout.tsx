import React from 'react'
import Script from 'next/script'
import Wrapper from '../../components/layout/Wrapper'
import tw from 'tailwind-styled-components'
import './../../styles/globals.scss'

const Notice = tw.div`
  text-center bg-red-600 text-white text-4xl font-black py-8 mb-4
`

const SiteLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Script src="https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.min.js" />
			<Wrapper>{children}</Wrapper>
		</>
	)
}

export default SiteLayout
