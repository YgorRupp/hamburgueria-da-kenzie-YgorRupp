import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { StyledHeader } from "./style";
import openModalCart from "../../assets/openModal.svg"
import logout from "../../assets/logout.svg"

export const Header = () => {
  const { setItemFilter, setFilter, filterProducts, setShowModal, Logout } =
    useContext(UserContext);

  return (
    <StyledHeader>
      <section>
        <p>
          Burger <span>Kenzie</span>
        </p>
        <div className="headerButton">
          <form>
            <input
              onChange={(e) => setItemFilter(e.target.value)}
              type="text"
              placeholder="Digitar Pesquisa"
            />
            <button
              onClick={() => filterProducts()}
              type="button"
              className="text one"
            >
              Pesquisar
            </button>
          </form>
          {/* <button onClick={() => setShowModal(true)}>Cart</button> */}
          <img onClick={() => setShowModal(true)} src={openModalCart} alt="" />
          <img onClick={() => Logout()} src={logout} alt="" />
          {/* <button onClick={() => Logout()}>Logout</button> */}
        </div>
      </section>
    </StyledHeader>
  );
};
