import React from "react"
import { StyledCartProduct } from "./style"

export const CartProduct = ({ product, remove }) => {
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
  )
}
