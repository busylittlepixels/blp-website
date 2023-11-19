/* eslint-disable no-console */
import tw from 'tailwind-styled-components'
import { RichText } from '../RichText'
import { FadeIn } from '../../shared/FadeIn'

type ITextBlock = {
  content?: any
}

const Section = tw.section`
    bg-white 
    px-6 
    md:pt-20
`

export const TextBlock = ({ content }: ITextBlock) => {

  const hello = `${content.LeadString} style={{"color":"red"}}>${content.StyledString}</span> ${content.EndString}`;


  return (
    <section className={'w-full boundedContainer'} id="intro">
      <FadeIn className="text-left">
      <div className="relative overflow-hidden bg-white md:pt-16 md:pb-16">
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
            <h1 className="font-black tracking-tighter text-3xl md:text-[3.5rem] mb-6 last:mb-0 uppercase leading-4" style={{"lineHeight": "1em" }}>
              {content.LeadString ? content.LeadString : ''} <span style={{"color": "red"}}>{content.StyledString ? content.StyledString : ''}</span> {content.EndString ? content.EndString : ''}
              {/* {hello ? decodeURIComponent(hello) : content.header} {content.displayMeta ? content.subtitle : null} */}
            </h1>
            <div className="header__underline"></div>
            <RichText content={content.content} className={`text-gray-600 mt-4 article_text flex-col`} />
          </div>
        </section>
      </div>
      </FadeIn>
    </section>
  )
}

export default TextBlock;