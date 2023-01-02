import React from "react";
import { Header } from "../../components/Header";
import CartModal from "../../components/Modal";
import { ProductsList } from "../../components/ProductsList";
import { StyledHome } from "./style";

export const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <StyledHome>
        <ProductsList></ProductsList>
        <CartModal></CartModal>
      </StyledHome>
    </div>
  );
};
