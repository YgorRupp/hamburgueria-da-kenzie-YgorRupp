import React from "react"
import { StyledHeader } from "./style"

export const Header = ({ setFilter, click }) => {
  return (
    <StyledHeader>
      <section>
        <p>
          Burger <span>Kenzie</span>
        </p>
        <form>
          <input 
            onChange={setFilter}
            type="text"
            placeholder="Digitar Pesquisa"
          />
          <button onClick={click} type="button"className="text one">
            Pesquisar
          </button>
        </form>
      </section>
    </StyledHeader>

  )
}
