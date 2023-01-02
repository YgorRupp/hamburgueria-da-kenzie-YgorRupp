import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const TotalCart = () => {
  const { currentSale } = useContext(UserContext);

  return (
    <span className="subTitle two">
      {currentSale
        .reduce((acc, actualValue) => {
          return acc + +actualValue.price;
        }, 0)
        .toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
    </span>
  );
};
