import React from "react"
import {CartProduct} from "./CartCard"
import {CartTotal} from "./CartTotal"
import { StyledCart } from "./style"

export const Cart = ({ currentSale, index, removeCurrentSale, list }) => {
  return (
    <StyledCart>
      <div>
        <section>
          <h2 className="title one">Carrinho de compras</h2>
        </section>
        <ul>
          {currentSale.map((product) => (
            <CartProduct
              key={index}
              currentSale={currentSale}
              product={product}
              removeCurrentSale={removeCurrentSale}
            ></CartProduct>
          ))}
          <CartTotal currentSale={currentSale} list={list}></CartTotal>
        </ul>
      </div>
    </StyledCart>
  )
}


