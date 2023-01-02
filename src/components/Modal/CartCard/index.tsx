import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { iProductsProps } from "../../ProductsList/Card";
import { StyledCartProduct } from "./style";

export const CartProduct = ({ product }: iProductsProps) => {
  const { remove } = useContext(CartContext);

  return (
    <StyledCartProduct>
      <div>
        <div>
          <img src={product.img} alt="" />
        </div>
        <div>
          <h2 className="title one">{product.name}</h2>
          <p className="paragraph two">{product.category}</p>
        </div>
      </div>
      <button
        onClick={() => remove(product.id)}
        className="text two"
        type="button"
      >
        Remover
      </button>
    </StyledCartProduct>
  );
};
