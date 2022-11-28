import React from "react"
import {TotalCart} from "../../TotalCart"
import {Button} from "../../Button"
import { StyledCartTotal } from "./style"


export const CartTotal = ({currentSale}) => {
  return (
    <StyledCartTotal>
      <div>
        <p className="subTitle two">Total</p>
        <TotalCart currentSale={currentSale}></TotalCart>
      </div>
      <Button>Remover todos </Button>
    </StyledCartTotal>
  )
}


