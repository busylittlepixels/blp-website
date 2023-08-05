/* eslint-disable no-console */
'use client'

import { BlockTest } from '../BlockTest'
import { ImageSlider } from '../ImageSlider'
import { TextBlock } from '../TextBlock'

// import { components } from '../../../blocks'

export const RenderBlocks = ({ content }: any) => {
  
  const pageBlocks = Object.entries(content).map((block: {}, index: number) => {
  const blockContent: any = block[1]

    switch (blockContent['blockType']) {
      case 'BlockTest':
        return <BlockTest key={blockContent['blockName']} content={...blockContent} />
      case 'TextBlock':
        return <TextBlock key={blockContent['blockName']} content={...blockContent} />
      case 'ImageSlider':
        return <ImageSlider key={blockContent['blockName']} content={blockContent['slider']} />
      default:
        return (
          <>
            <div key={index}>
              <h3>{blockContent['blockType']}</h3>
              <pre>{JSON.stringify(block, null, 2)}</pre>
            </div>
          </>
        )
    }
  })
  return pageBlocks
}

export default RenderBlocks
