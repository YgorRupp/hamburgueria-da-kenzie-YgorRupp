import React from "react"
import {InputSearch} from "../inputSearch"
import { StyledHeader } from "./style"

export const Header = ({setFilter }) => {
  return (
    <StyledHeader>
      <section>
        <p>
          Burger <span>Kenzie</span>
        </p>
        <form>
          <InputSearch setFilter={setFilter}></InputSearch>
          <button className="text one">Pesquisar</button>
        </form>
      </section>
    </StyledHeader>
  )
}
