import React from "react"
import { StyledCartProduct } from "./style"

export const CartProduct = (currentSale, removeCurrentSale) => {
  const data = currentSale.product;

  return (
    <StyledCartProduct>
      <div>
        <div>
          <img src={data.img} alt="" />
        </div>
        <div>
          <h2 className="title one">{data.name}</h2>
          <p className="paragraph two">{data.category}</p>
        </div>
      </div>
      <button
        onClick={() => removeCurrentSale(currentSale.product.id)}
        className="text two"
      >
        Remover
      </button>
    </StyledCartProduct>
  )
}

