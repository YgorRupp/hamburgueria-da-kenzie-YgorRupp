import React from "react"

export const TotalCart = ({ currentSale }) => {
  return (
    <span className="subTitle two">
      {currentSale
        .reduce((acc, actualValue) => {
          return acc + +actualValue.price
        }, 0)
        .toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
    </span>
  )
}

