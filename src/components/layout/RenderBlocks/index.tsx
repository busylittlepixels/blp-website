/* eslint-disable no-console */
'use client'
import React from 'react';
import { BlockTest, TextBlock, ImageSlider, CarouselContainer,  Contact, CallToAction, LogoCloud, Expertise } from '../../layout';

export const RenderBlocks = ({ content }: any) => {
  const components: { [key: string]: React.ComponentType<any> } = {
    BlockTest,
    TextBlock,
    ImageSlider,
    CarouselContainer,
    Contact,
    CallToAction,
    LogoCloud,
    Expertise
    // Add more components as needed
  };

  const pageBlocks = Object.entries(content).map(([blockName, blockContent]: [string, any], index: number) => {
    const BlockComponent = components[blockContent['blockType']];
  
    if (BlockComponent) {
      return <BlockComponent key={blockName} content={blockContent} />;
    } else {
      return (
        <div key={index}>
          <h3>{blockContent['blockType']} Not Found. Please check that the component exists.</h3>
          <pre>{JSON.stringify(blockContent, null, 2)}</pre>
        </div>
      );
    }
  });
  return <>{pageBlocks}</>;
};

export default RenderBlocks
