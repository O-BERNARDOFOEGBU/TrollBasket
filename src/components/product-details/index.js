import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { ReactComponent as StarsIcon } from "./assets/rating.svg";
import { ReactComponent as ReviewImageSvg } from "./assets/review-img.svg";
import { ReactComponent as SearchSvg } from "./assets/search.svg";
import { ReactComponent as BackLinkSvg } from "./assets/back-link.svg";
import { ReactComponent as ForwardArrow } from "./assets/forward-arrow.svg";
import { ReactComponent as CartIcon } from "./assets/cart.svg";
import { ReactComponent as CloseIcon } from "./assets/close-icon.svg";
import { addToCart } from "../../redux/slices/cartSlice";
import { Title, Text, CartCount } from "../buy/style";
import { LightButton, Button } from "../style";
import DesktopLayout from "../desktop-layout";
import { formatter } from "../currency-formatter";

const Header = styled.div`
  display: flex;
  justify: space-between;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 125px;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

const TopIconWrapper = styled.div`
  display: flex;
  gap: 13px;
  position: absolute;
  right: 15px;
  top: 16px;
  align-items: center;
  justify-content: center;
`;

const BackLinkIcon = styled(BackLinkSvg)`
  margin-left: 16px;
  margin-top: 8px;
`;
const ReviewImage = styled(ReviewImageSvg)`
  margin-left: 16px;
`;
const Stars = styled(StarsIcon)`
  margin-left: 16px;
  margin-top: 22px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px -1em 16px;
  padding: 8px 16px;
  background: $fff;
`;
const MainProductImage = styled.img`
  width: 312px;
  height: 206px;
  margin: 16px 0;
  padding: 0 !important;
  object-fit: cover;
  padding: 10px 5px;
  border-radius: 8px;
`;

const ProductName = styled.p`
  color: ${({ color }) => color || "#212c3d"};
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  margin-left: 16px;
`;

const ProductDesc = styled.p`
  color: ${({ color }) => color || "#627483"};
  font-size: 12px;
  font-weight: ${({ weight }) => weight || "400"};
  line-height: ${({ lineHeight }) => lineHeight || "21px"};
  margin-left: ${({ left }) => left || "16px"};
  margin-right: ${({ right }) => right || "16px"};
  margin-top: ${({ top }) => top || "0"};
`;

const ToastText = styled.p`
  color: #023b20;
  font-weight: 400;
  font-size: 14px;
`;

const Piece = styled.p`
  color: #627483;
  font-size: 12px;
  font-weight: 400;
  line-height: 21px;
  margin-top: 18px;
`;

const ProductPrice = styled.p`
  color: #212c3d;
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  margin-left: 16px;
  margin-top: 18px;
`;

const PriceWrapper = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap || "55%"};
  margin-top: ${({ top }) => top || "0"};
  position: ${({ position }) => position || null};
`;
const FixedBottom = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: fixed;
  bottom: 0;
  background: white;
  box-shadow: 0 1px 10px 0 #dddddd, 0 4px 5px 0 #23000000,
    0 2px 4px -1px #33000000;
  width: 100%;
  height: 70px;
  justify-content: center;
  max-width: inherit;
  z-index: ${({ zIndex }) => zIndex || 100};

  @media (max-width: 576px) {
    width: 100%;
`;

const BuyButtons = styled.div`
  display: flex;
  width: 90%;
`;

export const ToastContainer = styled.div`
  padding: 0px 16px;
  position: fixed;
  max-width: inherit;
  right: 0;
  left: 0;
  top: 110px;
  transition: opacity 0.5s linear 0s;

  @media (min-width: 576px) {
    max-width: 100%;
  }
  @media (max-width: 576px) {
    max-width: 100%;
    top: 45px;
  }
`;

export const Toast = styled.div`
  padding: 0px 16px;
  background: ${({ background }) => background || "#D3FDE9"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #93ecc1;
  border-radius: 4px;

  @media (min-width: 576px) {
    width: 311px;
    margin: 0 auto;
  }
`;

const ProductDetails = ({ id, data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const productsId = params.id;
  const allProducts = useSelector((state) => state.products.allProducts);
  const product = allProducts.find((item) => item.id === productsId);
  const [showToast, setShowToast] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartContent);

  const handleAddToCart = () => {
    setTimeout(() => {
      setShowToast(true);
    }, 300);
    dispatch(addToCart(product));
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <DesktopLayout>
      <Header>
        <TitleWrapper>
          <div>
            <BackLinkIcon onClick={() => navigate(-1)} />
          </div>
          <div>
            <Title>Details</Title>
          </div>
        </TitleWrapper>
        <TopIconWrapper>
          <div>
            <SearchSvg />
          </div>
          <div
            onClick={() => {
              navigate("/cart");
            }}
          >
            <CartIcon />
            <CartCount>{cartItems ? cartItems.length : 0}</CartCount>
          </div>
        </TopIconWrapper>
      </Header>
      {showToast && (
        <ToastContainer>
          <Toast>
            <ToastText color="#023B20">
              Item added to cart successfully
            </ToastText>
            <CloseIcon onClick={() => setShowToast(false)} />
          </Toast>
        </ToastContainer>
      )}
      <ImageWrapper>
        <MainProductImage src={product?.image} alt="product image" />
      </ImageWrapper>
      <ProductName>{product.name}</ProductName>
      <ProductDesc>{product.description}</ProductDesc>
      <PriceWrapper>
        <ProductPrice>
          {formatter.format(product.minPrice)} {" - "}
          {formatter.format(product.maxPrice)}
        </ProductPrice>
        <Piece>/Piece</Piece>
      </PriceWrapper>
      <Wrapper>
        <ProductName>Product Description</ProductName>
        <ForwardArrow />
      </Wrapper>
      <Wrapper gap="42%">
        <ProductName>Review and Ratings</ProductName>
        <ProductName color="#227EFF">View all</ProductName>
      </Wrapper>
      <Wrapper gap="0">
        <Text left="0" bottom="16px">
          <Stars />
        </Text>
        <Text color="#212c3d" weight="500" gap="4px">
          3.0
        </Text>
      </Wrapper>
      <ProductDesc top="16px">
        This is the best product I have used in a long while and the size fits
        perfectly and I love the colors!!!!!
      </ProductDesc>
      <Wrapper gap="0" top="16px">
        <ReviewImage />
        <ProductDesc top="12px" lineHeight="0" color="#212c3d">
          Segun Arinze
        </ProductDesc>
      </Wrapper>
      <FixedBottom>
        <BuyButtons>
          <Button
            top={"10px"}
            type={"button"}
            margin={"0 8px 0 0"}
            backgroundColor="#227EFF"
            radius="4px"
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>

          <LightButton
            background="#FFFFFF"
            top="10px"
            color="#227EFF"
            radius="4px"
          >
            Wish List
          </LightButton>
        </BuyButtons>
      </FixedBottom>
    </DesktopLayout>
  );
};

export default ProductDetails;
