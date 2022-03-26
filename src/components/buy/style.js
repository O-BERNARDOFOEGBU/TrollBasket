import styled from "styled-components";

export const Title = styled.h2`
  font-size: 14px;
  margin-top: 20px;
  margin-left: 16px;
`;
export const CartCount = styled.main`
  width: 16px;
  height: 16px;
  background-color: #ee6f44;
  border-radius: 26px;
  position: absolute;
  margin-top: ${({ top }) => top || "-30px"};
  margin-left: ${({ left }) => left || "7px"};
  text-align: center;
  padding-top: 2px;
  font-size: 10px;
  font-weight: bold;
  color: white;
`;
export const Text = styled.div`
  display: ${({ display }) => display || null};
  font-size: ${({ size }) => size || "14px"};
  font-weight: ${({ weight }) => weight || "400"};
  color: ${({ color }) => color || "#212c3d"};
  margin-left: ${({ left }) => left || "16px"};
  margin-top: ${({ top }) => top || null};
  margin-bottom: ${({ bottom }) => bottom || null};
  gap: ${({ gap }) => gap || null};
`;
export const SectionedTitle = styled.span`
  margin: 0 0 0 5px;
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 5px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${({ top }) => top || null};
  padding: 10px;
  justify-content: space-between;
  height: ${({ height }) => height || "45px"};
`;

export const Container = styled.main`
  padding-bottom: ${({ bottom }) => bottom || "65px"};
  margin-top: ${({ top }) => top || "45px"};
  width: 100%;
`;

export const Border = styled.div`
  border-left: 0.5px solid #cbd6e0;
  height: 20px;
`;
export const TextContainer = styled.div`
  color: #29394f;
  font-size: 10px;
  margin-top: ${({ top }) => top || "4px"};
  margin-right: ${({ right }) => right || null};
  line-height: 15px;
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 24px 0 0 0;
`;

export const GridItem = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  padding: 0 16px 0 14px;
  padding-bottom: 16px;
  border: solid 2px white;
  border-radius: ${({ radius }) => radius || null};
  width: ${({ width }) => width || "100px"};
`;

export const ImageWrapper = styled.div`
    margin-bottom: 5px;
    display: flex;
    margin-bottom: ${({ bottom }) => bottom || null};
    position: relative;
    border-radius: 13px;
    flex: 0 0 33.333333%
    justify-content: ${({ justifyContent }) => justifyContent || null};
`;

export const ProductImage = styled.img`
  width: ${({ width }) => width || "101.57px"};
  height: ${({ height }) => height || "98px"};
  margin-top: ${({ top }) => top || 0};
  margin-left: -2px;
  border-radius: 4px;
  object-fit: cover;
  padding: 0;
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 10px;
    flex: 0 0 33.333333%
    max-width: ${({ width }) => width || "100px"};
    padding: ${({ padding }) => padding || "10px"};
`;

export const NameContainer = styled.div`
  font-size: 10px;
  overflow: hidden;
  margin-top: 4px;
  text-transform: capitalize;
  line-height: 15px;
  font-weight: 400;
  color: #718596;
`;
export const PriceContainer = styled.div`
  display: block;
  font-weight: 700;
  margin-top: 8px;
  font-size: 12px;
  line-height: 18px;
  color: #071827;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: fixed;
  bottom: 0;
  background: white;
  box-shadow: 0 1px 10px 0 #dddddd, 0 4px 5px 0 #23000000,
    0 2px 4px -1px #33000000;
  width: 100%;
  height: 80px;
  justify-content: center;
  max-width: inherit;
  z-index: ${({ zIndex }) => zIndex || 100};
`;
