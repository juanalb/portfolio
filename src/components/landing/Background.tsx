import styled from "styled-components";
import bg_image from "./bg_image.jpg";
import React from "react";

const RevealEffectComponent = styled.div`
  border-radius: 50%;
  background: rgba(0, 0, 0, 0);
  border: none;
  // TODO: make box-shadow follow the pattern/curve of the bg image
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: inset 30px -60px 73px 50px rgba(0, 0, 0, 0.95);
  width: ${(props: IRevealEffect) => props.circleRadius * 2}px;
  height: ${(props: IRevealEffect) => props.circleRadius * 2}px;
  text-align: center;
  line-height: 200px;
  position: fixed;

  //Set background image to full cover at all times
  background: url(${bg_image}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const Container = styled.div`
  //Set background image to full cover at all times
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IRevealEffect {
  xTrail: number;
  yTrail: number;
  circleRadius: number;
}

function RevealEffect(props: IRevealEffect) {
  return (
    <RevealEffectComponent
      xTrail={props.xTrail}
      yTrail={props.yTrail}
      circleRadius={props.circleRadius}
      style={{
        left: props.xTrail,
        top: props.yTrail
      }}
    />
  );
}

export const Background: React.FC = props => {
  const [xTrail, setXTrail] = React.useState(0);
  const [yTrail, setYTrail] = React.useState(0);
  const circleRadius: number = 150;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    // Cursor position of client
    const { clientX, clientY } = e;

    setTimeout(() => {
      setXTrail(clientX - circleRadius);
      setYTrail(clientY - circleRadius);
    }, 200);
  }

  return (
    <Container onMouseMove={e => handleMouseMove(e)}>
      <RevealEffect
        xTrail={xTrail}
        yTrail={yTrail}
        circleRadius={circleRadius}
      />
      {props.children}
    </Container>
  );
};
