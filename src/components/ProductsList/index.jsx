import React from "react"
import {Products} from "./Card"
import { StyledProductsList } from "./style"

export const ProductsList = ({ list, addCurrentSale, filtered }) => {
  return (
    <StyledProductsList>
      {filtered.length === 0 ? ( 
         list.map(product => {
            return (
              <Products
              product={product}
              addCurrentSale={addCurrentSale}
              key={product.name}
            >
            </Products>
            )
      })): (
          filtered.map(product => {
            return (
              <Products
              product={product}
              addCurrentSale={addCurrentSale}
              key={product.name}
            >
            </Products>
            )
            }))}
    </StyledProductsList>
  )
}


