import React from "react"
import {Products} from "./Card"
import { StyledProductsList } from "./style"

export const ProductsList = ({ list, addCurrentSale }) => {
  return (
    <StyledProductsList>
      {list.map((product) => (
        <Products
          product={product}
          addCurrentSale={addCurrentSale}
          key={product.name}
        >
          {product}
        </Products>
      ))}
    </StyledProductsList>
  )
}


