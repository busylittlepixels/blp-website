'use client';
import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

const VerticalLineStyle = styled.div`
  .vertical-line {
    width: 8px;
    background-color: red;
    height: 150px;
    transform: scaleY(0);
    margin: 0 auto;
    transform-origin: top;
    margin-bottom: 150px;
  }
`;

export const VerticalLine = () => (
<>
  <VerticalLineStyle>
    <Controller>
      <Scene triggerElement="#line-trigger" duration={300}>
        {progress => (
          <Tween
            to={{
              transform: "scaleY(1)"
            }}
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
            <div className="vertical-line" />
          </Tween>
        )}
      </Scene>
    </Controller>
  </VerticalLineStyle>
  </>
);

export default VerticalLine;