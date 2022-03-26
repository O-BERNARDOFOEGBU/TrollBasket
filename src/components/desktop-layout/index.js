import React, { Fragment } from "react";

import styled from "styled-components";

const LayoutWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  background-color: #edf2f7;
  padding: 0;
`;

const Background = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  background: #edf2f7;
  margin: 0 auto;
  top: 65px;
  min-height: ${({ fullHeight }) =>
    fullHeight ? "100vh" : "calc(100vh - 65px)"};

  @media (max-width: 576px) {
    top: 0;
    min-height: 100vh;
  }
`;

const DesktopStyledWidth = styled.div`
  position: relative;
  width: inherit;
  background: white;
  margin: 0 auto 0;
  overflow: hidden;
  @media (min-width: 576px) {
    max-width: 375px;
    -webkit-box-shadow: 0px 52px 120px rgba(0, 0, 0, 0.08);
    box-shadow: 0px 52px 120px rgba(0, 0, 0, 0.08);
  }
`;

const BlueBackground = styled.div`
  position: absolute;
  height: ${({ height }) => height};
  width: 100%;
  background: blue;
`;

const DesktopLayout = ({ children }) => {
  return (
    <Fragment>
      <LayoutWrapper>
        <Background>
          <DesktopStyledWidth>
            <BlueBackground />
            {children}
          </DesktopStyledWidth>
        </Background>
      </LayoutWrapper>
    </Fragment>
  );
};

export default DesktopLayout;
