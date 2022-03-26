import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";
import Slideshow from "../slideshow/Slideshow";
import { ReactComponent as BlueWalletIcon } from "./assets/blue-wallet.svg";
import { ReactComponent as CartIcon } from "./assets/cart.svg";
import { ReactComponent as LocationIcon } from "./assets/bag.svg";
import { ReactComponent as DropDownSvg } from "./assets/dropdown.svg";
import { ReactComponent as CategoriesIcon } from "./assets/categories.svg";
import { ReactComponent as ShopsIcon } from "./assets/shops.svg";
import { ReactComponent as PopularIcon } from "./assets/popular-products.svg";
import { ReactComponent as RecommendedIcon } from "./assets/recommended.svg";
import { ReactComponent as WalletIcon } from "./assets/wallet.svg";
import { ReactComponent as BuyIcon } from "./assets/buy.svg";
import { ReactComponent as HomeIcon } from "./assets/home.svg";
import { ReactComponent as DealsIcon } from "./assets/deals.svg";
import { ReactComponent as MoreIcon } from "./assets/more.svg";
import Search from "../search";
import { formatter } from "../currency-formatter";

import {
  Title,
  Container,
  ContentWrapper,
  Space,
  Border,
  TextContainer,
  GridBox,
  GridItem,
  ImageWrapper,
  PriceContainer,
  ProductImage,
  ProductInfo,
  NameContainer,
  Wrapper,
  NavBar,
  SectionedTitle,
  CartCount,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../../data/productData";
import { addProduct } from "../../redux/slices/productSlice";
import DesktopLayout from "../desktop-layout";

const DropDownIcon = styled(DropDownSvg)`
  margin-left: 11px;
`;

const Buy = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchForProduct, setSearchForProduct] = useState("");
  const allProducts = useSelector((state) => state.products.allProducts);
  const [searchedOptions, setSearchedOptions] = useState(allProducts);
  const cartItems = useSelector((state) => state.cart.cartContent);

  useEffect(() => {
    dispatch(addProduct(products));

    if (products && products.length > 0 && searchForProduct) {
      const searchResults = products.filter((commodity) =>
        String(commodity.name)
          .toLowerCase()
          .includes(searchForProduct.toLowerCase())
      );
      setSearchedOptions(searchResults);
    } else {
      setSearchedOptions(products);
    }
  }, [dispatch, searchForProduct]);

  return (
    <DesktopLayout>
      <Fragment>
        <Container top="0px" bottom="150px">
          <Title>Trollbasket</Title>
          <ContentWrapper>
            <Space>
              <LocationIcon />
              <SectionedTitle> Lagos</SectionedTitle>
              <DropDownIcon />
            </Space>
            <Border />
            <Space>
              <BlueWalletIcon />
              <SectionedTitle>My Orders</SectionedTitle>
            </Space>
            <Border />
            <Space
              onClick={() => {
                navigate("/cart");
              }}
            >
              <CartIcon />
              <CartCount top="-20px">
                {cartItems ? cartItems.length : 0}
              </CartCount>

              <SectionedTitle>Cart</SectionedTitle>
            </Space>
          </ContentWrapper>
          <Search
            placeholder={"Search Merchbuy"}
            value={searchForProduct}
            onChange={(e) => {
              setSearchForProduct(e.target.value);
            }}
          />

          <Slideshow />
          <ContentWrapper top="25px">
            <CategoriesIcon />
            <PopularIcon />
            <RecommendedIcon />
            <ShopsIcon />
          </ContentWrapper>
          <ContentWrapper>
            <TextContainer>
              Product <br />
              categories
            </TextContainer>
            <TextContainer>
              Popular
              <br /> Products
            </TextContainer>
            <TextContainer>
              Recommended
              <br /> Products
            </TextContainer>
            <TextContainer top="-5px" right="2%">
              Shops
            </TextContainer>
          </ContentWrapper>
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
        </Container>
        <Fragment>
          <Wrapper>
            <NavBar>
              <Link to="/Home" class="nav__link">
                <HomeIcon />
                <span class="nav__text">Home</span>
              </Link>
              <Link to="/Buy" class="nav__link">
                <BuyIcon />
                <span class="nav__text" style={{ color: "#227EFF" }}>
                  Buy
                </span>
              </Link>

              <Link to="/Deal" class="nav__link">
                <DealsIcon />
                <span class="nav__text">Deals</span>
              </Link>

              <Link to="/Wallet" class="nav__link">
                <WalletIcon />
                <span class="nav__text">Wallet</span>
              </Link>

              <Link to="/More" class="nav__link">
                <MoreIcon />
                <span class="nav__text">More</span>
              </Link>
            </NavBar>
          </Wrapper>
        </Fragment>
      </Fragment>
    </DesktopLayout>
  );
};

export default Buy;
