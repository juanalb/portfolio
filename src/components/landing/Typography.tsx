import React from "react";
import styled from "styled-components";
// @ts-ignore
import Typical from "react-typical";
import javascriptIcon from "./javascript-plain.svg";

const CopyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  z-index: 1;
  > * {
    margin: 0;
    color: white;
  }
`;

const Title = styled.h1`
  font-family: "Open Sans-Bold";
  font-weight: bold;
  font-size: 36px;
`;

const SubtitleTypical = styled(Typical)`
  font-family: Major Mono Display, monospace;
  font-size: 22px;
`;

const Subtitle = styled.h2`
  font-family: Major Mono Display, monospace;
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 7px;
`;

const Divider = styled.line`
  width: 0px;
  height: 56px;

  border: 0.7px solid #ffffff;
  margin: 0 40px;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

// React.memo prevents this component from re-rendering the parent component,
// causing this component to render again and give an undesirable behaviour
export const Typography = React.memo(function TypographyMemoized() {
  return (
    <CopyContainer>
      <Icon src={javascriptIcon} alt={"Logo of JavaScript"} />
      <Divider />
      <div>
        <Title style={{ paddingLeft: "3px" }}>JUAN</Title>
        <Title style={{ marginTop: "-8px" }}>ALBERGEN</Title>

        <SubtitleTypical
          loop={"no"}
          wrapper={"h2"}
          steps={[
            "front-end developer",
            2000,
            "currently looking for an internship",
            1
          ]}
        />
        {/*<Subtitle>front-end developer</Subtitle>*/}
      </div>
    </CopyContainer>
  );
});
