// src/components/Marquee.js
import React from 'react';

type MarqueeProps = {
  text?: string
}

export const MarqueeBanner = ({ text }:MarqueeProps) => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {/* Repeat your content here */}
        {text ? text : 'Nada'}
      </div>
    </div>
  );
};

export default MarqueeBanner;
