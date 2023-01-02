import React, { useContext } from "react";
import { StyledCartModal } from "./style";
import { UserContext } from "../../context/UserContext";
import { CartProduct } from "../Modal/CartCard";
import { CartTotal } from "../Modal/CartTotal";

const CartModal = () => {
  const { currentSale, showModal, setShowModal } = useContext(UserContext);
  return (
    showModal && (
      <StyledCartModal>
        <div className="modalBox">
          <section>
            <h2 className="title one">Carrinho de compras</h2>
            <button onClick={() => setShowModal(false)}>X</button>
          </section>
          <ul>
            {currentSale.map((product, index) => (
              <CartProduct key={index} product={product}></CartProduct>
            ))}
            <CartTotal></CartTotal>
          </ul>
        </div>
      </StyledCartModal>
    )
  );
};

export default CartModal;
