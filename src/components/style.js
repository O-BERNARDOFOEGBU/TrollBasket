import styled from "styled-components";

export const LightButton = styled.button`
  position: ${({ position }) => position || null};
  right: ${({ right }) => right || null};
  background-color: ${({ background }) => background || "#e9f6ff"};
  height: ${({ height }) => height || "45px"};
  width: ${({ width }) => width || "100%"};
  margin: ${({ margin }) => margin || null};
  margin-top: ${({ top }) => top || "32px"};
  color: ${({ color }) => color || "#22a8ff"};
  font-size: ${({ size }) => size || null};
  font-weight: ${({ weight }) => weight || null};
  border-radius: ${({ radius }) => radius || "4px"};
  border: solid 1px ${({ borderColor }) => borderColor || "#227EFF"};
  cursor: ${({ cursor }) => cursor || null};
  z-index: ${({ zIndex }) => zIndex || null};
`;

export const Button = styled.button`
  display: inline-block;
  background-color: ${({ backgroundColor }) => backgroundColor || "#227EFF"};
  border-radius: ${({ radius }) => radius || "4px"};
  font-size: ${({ size }) => size || "14px"};
  font-weight: ${({ weight }) => weight || "500"};
  height: ${({ height }) => height || "45px"};
  width: ${({ width }) => width || "100%"};
  border: ${({ border }) => border || "none"};
  margin: ${({ margin }) => margin || null};
  margin-top: ${({ top }) => top || "32px"};
  margin-bottom: ${({ bottom }) => bottom || null};
  margin-right: ${({ right }) => right || null};
  color: ${({ color }) => color || "#ffffff"};
  display: ${({ display }) => display || null};
  justify-content: ${({ justifyContent }) => justifyContent || null};
  align-items: ${({ alignItems }) => alignItems || null};
  cursor: pointer;
  z-index: ${({ zIndex }) => zIndex || null};
  position: ${({ position }) => position || "relative"};
  top: ${({ ptop }) => ptop || null};
  overflow: hidden;
  padding: ${({ padding }) => padding || "0px"};
  outline: none;
  &:focus::after {
    display: block;
  }

  &:disabled {
    opacity: 0.5;
  }

  ${({ mediaFontSize }) =>
    mediaFontSize &&
    `
    @media only screen and (max-width: 330px) {
        font-size: 10px;
    }
`}
`;
