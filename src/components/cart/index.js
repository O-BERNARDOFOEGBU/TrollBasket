import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TitleWrapper } from "../product-details";
import styled from "styled-components";
import { Title } from "../buy/style";
import { formatter } from "../currency-formatter";

import {
  addToCart,
  subFromCart,
  deleteFromCart,
  clearFromCart,
} from "../../redux/slices/cartSlice";
import {
  GridBox,
  GridItem,
  ImageWrapper,
  PriceContainer,
  ProductImage,
  ProductInfo,
  NameContainer,
} from "../buy/style";
import { ReactComponent as BackLinkSvg } from "../product-details/assets/back-link.svg";
import { ReactComponent as AddSvg } from "./assets/add-icon.svg";
import { ReactComponent as SubSvg } from "./assets/sub-icon.svg";
import { ReactComponent as BinSvg } from "./assets/bin-icon.svg";
import { Button } from "../style";
import DesktopLayout from "../desktop-layout";

const BackLinkIcon = styled(BackLinkSvg)`
  margin-left: 16px;
  margin-top: 8px;
`;

const AddIcon = styled(AddSvg)`
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-left: 8px !important;
  margin-top: -2px;
`;
const SubIcon = styled(SubSvg)`
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-right: 0px !important;
  margin-top: -2px;
  pointer-events: ${({ disabled }) => disabled && "none"};
`;

const BinIcon = styled(BinSvg)`
  margin-left: 16px;
  margin-top: 8px;
`;

const CartWrapper = styled.div`
  margin-top: 65px;
`;

const CartItemWrapper = styled.div`
  padding: 16px 16px 0;
  background: white;
  margin-bottom: 0px;
`;

const TopContentHolder = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f6f2f2;
  margin-top: 0;
`;
const ImgHolder = styled.div`
  border-radius: 4px;
  width: 48px;
  height: 48px;
  margin-right: 16px;
  margin-left: 16px;
  margin-bottom: 8px;
`;
const LowerContentHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 0;
`;
const Text = styled.div`
  font-size: ${({ size }) => size || "14px"};
  font-weight: ${({ weight }) => weight || "400"};
  color: ${({ color }) => color || "#212c3d"};
  margin-left: ${({ left }) => left || "16px"};
  margin-top: ${({ top }) => top || null};
`;
const TotalPriceHolder = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ top }) => top || null};
  margin-bottom: ${({ bottom }) => bottom || null};
  margin-left: ${({ left }) => left || "16px"};
  margin-right: ${({ right }) => right || "16px"};
`;

const PriceWrapper = styled.div``;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
`;
const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const BuyButtons = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  padding-left: 16px;
  padding-top: 16px;
`;

const Cart = (item) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts);
  const slicedProducts = allProducts?.slice(0, 3);
  const [searchedOptions] = useState(slicedProducts);
  const cartItems = useSelector((state) => state.cart.cartContent);
  const calculateTotalPrices = cartItems.map(
    (item) => item.maxPrice * item.quantity
  );
  const totalPrice = calculateTotalPrices.reduce(
    (formerPrice, currentPrice) => formerPrice + currentPrice,
    0
  );

  const handleMinusFromCart = (id) => {
    dispatch(subFromCart(id));
  };

  return (
    <DesktopLayout>
      <TitleWrapper>
        <div>
          <BackLinkIcon onClick={() => navigate(-1)} />
        </div>
        <div>
          <Title>Carts</Title>
        </div>
      </TitleWrapper>
      <CartWrapper>
        {cartItems.map((item, index) => (
          <CartItemWrapper key={index}>
            <TopContentHolder>
              <ImgHolder>
                <img
                  src={item.image}
                  width="48px"
                  height="48px"
                  alt="product"
                />
              </ImgHolder>
              <PriceWrapper>
                <Text transform={"capitalize"}>{item.name}</Text>
                <Text weight="700">{formatter.format(item.maxPrice)}</Text>
              </PriceWrapper>
            </TopContentHolder>
            <LowerContentHolder>
              <RightDiv
                onClick={() => {
                  dispatch(deleteFromCart(item.id));
                }}
              >
                <BinIcon />
                <Text top="8px" size={"12px"}>
                  Delete
                </Text>
              </RightDiv>
              <LeftDiv>
                <SubIcon
                  disabled={item.quantity === 1}
                  onClick={() => {
                    dispatch(handleMinusFromCart(item.id));
                  }}
                />

                <Text>{item.quantity || 0}</Text>

                <AddIcon
                  onClick={() => {
                    dispatch(addToCart(item));
                  }}
                />
              </LeftDiv>
            </LowerContentHolder>
          </CartItemWrapper>
        ))}
        <TotalPriceHolder top="32px">
          <Text top="16px">Subtotal</Text>
          <Text weight="700" top="16px">
            {formatter.format(totalPrice)}
          </Text>
        </TotalPriceHolder>
        <TotalPriceHolder>
          <Text top="16px">Total</Text>
          <Text weight="700" top="16px">
            {formatter.format(totalPrice)}
          </Text>
        </TotalPriceHolder>
        <BuyButtons>
          <Button
            top={"10px"}
            type={"button"}
            margin={"0 8px 0 0"}
            backgroundColor="#227EFF"
            radius="4px"
            height={"56px"}
            // zIndex="200"
            onClick={() =>
              dispatch(clearFromCart()) && navigate("/checkout_success")
            }
          >
            Check Out
          </Button>
        </BuyButtons>
      </CartWrapper>
      <TotalPriceHolder top={"40px"}>
        <Text>Recently viewed</Text>
        <Text color="#227EFF" onClick={() => navigate("/")}>
          View all
        </Text>
      </TotalPriceHolder>
      <GridBox>
        {searchedOptions.map((item, index) => (
          <div key={index}>
            <GridItem radius={"8px"}>
              <ImageWrapper
                justifyContent="center"
                onClick={() => {
                  navigate("/products/" + item.id);
                }}
              >
                <ProductImage src={item?.image} />
              </ImageWrapper>
              <ProductInfo padding="0">
                <NameContainer>{item?.name.toLowerCase()}</NameContainer>
                <PriceContainer>
                  {formatter.format(item.minPrice)}-
                  {formatter.format(item.maxPrice)}
                </PriceContainer>
                <NameContainer>{`MOQ ${item.moq} (pieces)`}</NameContainer>
              </ProductInfo>
            </GridItem>
          </div>
        ))}
      </GridBox>
    </DesktopLayout>
  );
};

export default Cart;
