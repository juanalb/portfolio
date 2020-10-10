import React from "react";
import styled from "styled-components";
import bg_image from "./bg_image.jpg";
// @ts-ignore
import Typical from "react-typical";

const circleRadius = 150;

const ImageBackground = styled.div`
    //Set background image to full cover at all times
    width: 100vw;
    height: 100vh;
    background-color: black;  
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: none;

`;

const CopyContainer = styled.div`
  z-index: 1;
  > * {
    margin: 0;
    color: white;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  background: rgba(0, 0, 0, 0); // transparent
  // TODO: make box-shadow follow the pattern/curve of the bg image
  box-shadow: inset 30px 30px 73px 22px rgba(0,0,0,0.95);
  width: ${circleRadius * 2}px;
  height: ${circleRadius * 2}px;
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

export function Landing() {
  const [xTrail, setXTrail] = React.useState(0);
  const [yTrail, setYTrail] = React.useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;

    setTimeout(() => {
      setXTrail(clientX - circleRadius);
      setYTrail(clientY - circleRadius);
    }, 200);
  };

  return (
    <ImageBackground onMouseMove={e => handleMouseMove(e)}>
      <Circle
        style={{
          left: xTrail,
          top: yTrail
        }}
      />
      <CopyContainer>
        <h1>Juan Albergen</h1>
        {/*  TODO: make components re-render individually*/}
        {/*<Typical*/}
        {/*    loop={Infinity}*/}
        {/*    wrapper={'b'}*/}
        {/*    steps={[*/}
        {/*        'Front-end Developer',*/}
        {/*        1000,*/}
        {/*        'Using React.js',*/}
        {/*        1000,*/}
        {/*        'With Typescript',*/}
        {/*        1000,*/}
        {/*        'Currently looking for an internship'*/}
        {/*    ]}*/}
        {/*/>*/}
        <h2>Front-end Developer</h2>
      </CopyContainer>
    </ImageBackground>
  );
}
