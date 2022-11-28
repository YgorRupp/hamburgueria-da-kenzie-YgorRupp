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
  filter,
  setFilter,
}) => {
  return (
    <div>
      <Header filter={filter} setFilter={setFilter}></Header>
      <StyledHome>
        <ProductsList
          list={list}
          addCurrentSale={addCurrentSale}
        ></ProductsList>
        <Cart
          currentSale={currentSale}
          remove={remove}
        ></Cart>
      </StyledHome>
    </div>
  )
}

