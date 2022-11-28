import React from "react"
import {Cart} from "../../components/Cart"
import {Header} from "../../components/Header"
import {ProductsList} from "../../components/ProductsList"
import { StyledHome } from "./style"

export const HomePage = ({
  list,
  addCurrentSale,
  currentSale,
  remove,
  filterProducts,
  filtered,
  click,
  setFilter,
}) => {
  return (
    <div>
      <Header setFilter={setFilter} click={click} filterProducts={filterProducts}></Header>
      <StyledHome>
        <ProductsList
          list={list}
          addCurrentSale={addCurrentSale}
          filtered={filtered}
        ></ProductsList>
        <Cart
          currentSale={currentSale}
          remove={remove}
        ></Cart>
      </StyledHome>
    </div>
  )
}

