import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import classnames from "classnames";

const BigTextStyle = styled.div`
  .big-text-mobile {
    position: absolute;
    font-size: 450px;
    left: 100%;
    font-weight: bolder;
    color: red;
    margin: 0 auto;
  }
`;

export const BigText = props => (
  <BigTextStyle>
    <Controller>
      <Scene triggerElement="#big-text-trigger" duration={1000}>
        {progress => (
          <Tween
            to={{
              left: "-200%"
            }}
            ease="Strong.easeInOut"
            totalProgress={progress}
            paused
          >
            <div
              className={classnames("big-text-mobile", props.bigText)}
            >
              PIXELS.
            </div>
          </Tween>
        )}
      </Scene>
    </Controller>
  </BigTextStyle>
);

export default BigText;