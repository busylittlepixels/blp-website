/* eslint-disable no-console */
import tw from 'tailwind-styled-components'

interface ITextBlock {
  content?: any
}

const Section = tw.section`
    bg-white 
    px-6 
    md:pt-20
`

export const TextBlock = ({ content }: ITextBlock) => {
  return (
    <Section id={'about'}>
      <div className="relative overflow-hidden bg-white pt-16 md:pb-16">
        <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
          <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
            <svg
              className="absolute bottom-12 left-full translate-x-32 transform"
              width="400"
              height="384"
              fill="none"
              viewBox="0 0 400 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="400" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <section className="relative lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <h1 className="font-black tracking-tighter text-3xl md:text-[3.5rem] mb-6 last:mb-0 uppercase">
              {content.blockName}
            </h1>
            <div className="header__underline"></div>
            {content.content[0].children[0].text}
          </div>
        </section>
      </div>
    </Section>
  )
}
