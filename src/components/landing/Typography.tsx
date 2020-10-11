import React from "react";
import styled from "styled-components";
// @ts-ignore
import Typical from "react-typical";

const CopyContainer = styled.div`
  z-index: 1;
  > * {
    margin: 0;
    color: white;
  }
`;

// React.memo prevents this component from re-rendering the parent component,
// causing this component to render again and give an undesirable behaviour
export const Typography = React.memo(function TypographyMemoized() {
  return (
    <CopyContainer>
      <h1>Juan Albergen</h1>
      <Typical
        loop={Infinity}
        wrapper={"b"}
        steps={[
          "Front-end Developer",
          1000,
          "Using React.js",
          1000,
          "With Typescript",
          1000,
          "Currently looking for an internship"
        ]}
      />
    </CopyContainer>
  );
});
