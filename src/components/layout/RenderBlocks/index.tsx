/* eslint-disable no-console */
'use client'
import React from 'react';
import dynamic from "next/dynamic";

// Use dynamic import for code splitting

const BlockTest = dynamic(() => import('../BlockTest')); 
const CarouselBlock = dynamic(() => import('../CarouselBlock')); 
const CallToAction = dynamic(() => import('../CallToAction'));
const Contact = dynamic(() => import('../Contact'));
const Expertise = dynamic(() => import('../Expertise'));
const TextBlock = dynamic(() => import('../TextBlock'));
const LogoCloud = dynamic(() => import('../LogoCloud')); 
const ImageSlider = dynamic(() => import('../ImageSlider')); 

export const RenderBlocks = ({ content }: any) => {
  const components: { [key: string]: React.ComponentType<any> } = {
    BlockTest,
    TextBlock,
    ImageSlider,
    CarouselBlock,
    Contact,
    CallToAction,
    LogoCloud,
    Expertise
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
