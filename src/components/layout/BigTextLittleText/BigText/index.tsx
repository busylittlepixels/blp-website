'use client';
import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import classnames from "classnames";

const BigTextStyle = styled.div`
    overflow-x: hidden;

   .big-text-mobile {
        position: absolute;
        font-size: 500px;
        left: 100%;
        font-weight: bold;
        color: #E1171E;
        margin: 0 auto;
        opacity: 0.9;
    }
`;

export const BigText = props => (
  <BigTextStyle>
    <Controller>
      <Scene triggerElement="#big-text-trigger" duration={1000}>
        {progress => (
          <Tween
            to={{
              left: "-650%"
            }}
            ease="Strong.easeInOut"
            totalProgress={progress}
            paused
          >
            <div
              className={classnames("big-text-mobile", props.bigText)}
            >
              busy<span className="text-gray-200">little</span>pixels.
            </div>
          </Tween>
        )}
      </Scene>
    </Controller>
  </BigTextStyle>
);

export default BigText;
