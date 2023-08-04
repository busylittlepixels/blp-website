/* eslint-disable no-console */
'use client'

// eslint-disable-next-line import/extensions
import { Blocks } from '../../../payload-types'
import { BlockTest } from '../BlockTest'
import { ImageSlider } from '../ImageSlider'
import { TextBlock } from '../TextBlock'

// @ts-ignore
function renderContent(content: Blocks) {
  const pageBlocksList = Object.entries(content).map((block: any, id: number) => {
    const blockContent: any = block[1]

    switch (blockContent['blockType']) {
      case 'BlockTest':
        return <BlockTest key={blockContent['uid']} content={...blockContent} />
      case 'TextBlock':
        return <TextBlock key={blockContent['uid']} content={...blockContent} />
      case 'ImageSlider':
        return <ImageSlider key={blockContent['uid']} slider={blockContent['slider']} />
      default:
        return (
          <>
            <div key={id}>
              <h3>{blockContent['blockType']}</h3>
              <pre>{JSON.stringify(block, null, 2)}</pre>
            </div>
          </>
        )
    }
  })

  return pageBlocksList
}

export const PageBlocks = ({ content }: IProps) => {
  return <>{renderContent(content)}</>
}

export default PageBlocks
