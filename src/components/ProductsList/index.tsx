import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Products } from "./Card";
import { StyledProductsList } from "./style";

export const ProductsList = () => {
  const { filter, list } = useContext(UserContext);
  return (
    <StyledProductsList>
      {filter.map((product) => {
        return <Products product={product} key={product.name} />;
      })}
    </StyledProductsList>
  );
};
