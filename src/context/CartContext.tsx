import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

interface iCartProvider {
  children: React.ReactNode;
}

interface iCartContext {
  remove: (id: number) => void;
}

export const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iCartProvider) => {
  const { currentSale, setCurrentSale } = useContext(UserContext);

  function remove(id: number) {
    const newList = currentSale.filter((product) => product.id !== id);
    setCurrentSale(newList);
    toast.warn("Produto removido com sucesso");
  }
  return (
    <CartContext.Provider value={{ remove }}>{children}</CartContext.Provider>
  );
};
