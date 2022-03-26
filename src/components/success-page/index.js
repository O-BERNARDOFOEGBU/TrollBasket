import React, { Fragment } from "react";
import bg from "./assets/back.svg";
import { ReactComponent as SuccessIcon } from "./assets/success.svg";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LightButton } from "../style";
import DesktopLayout from "../desktop-layout";

const Container = styled.div`
  background-image: url(${bg});
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Text = styled.div`
  font-size: ${({ size }) => size || "14px"};
  font-weight: ${({ weight }) => weight || "400"};
  color: ${({ color }) => color || "#212c3d"};
  margin-left: ${({ left }) => left || "16px"};
  margin-top: ${({ top }) => top || null};
`;

const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <DesktopLayout>
        <Container>
          <SuccessIcon />
          <Text
            color="white"
            top={"23px"}
            bottom={"10px"}
            weight={"700"}
            size={"24px"}
          >
            Checkout Successful
          </Text>
          <Text color="#E9F2FF" bottom={"304px"}>
            Your checkout is now successful.
          </Text>
          <LightButton
            top={"250px"}
            type={"button"}
            margin={"75px auto 0px "}
            backgroundColor="#227EFF"
            radius="4px"
            height={"56px"}
            width={"95%"}
            zIndex="200"
            onClick={() => navigate("/")}
          >
            Got it
          </LightButton>
        </Container>
      </DesktopLayout>
    </Fragment>
  );
};

export default SuccessPage;
