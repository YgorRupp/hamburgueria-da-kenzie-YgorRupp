import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { StyledProducts } from "./style";

interface iProductsData {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}
export interface iProductsProps {
  product: iProductsData;
}

export const Products = ({ product }: iProductsProps) => {
  const { addCurrentSale } = useContext(UserContext);

  return (
    <StyledProducts>
      <div>
        <img src={product.img} alt={product.name} />
      </div>
      <section>
        <h2 className="title one">{product.name}</h2>
        <p className="paragraph two">{product.category}</p>
        <span className="subTitle two">
          {Number(product.price).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </section>
      <button className="subTitle two" onClick={() => addCurrentSale(product)}>
        Adicionar
      </button>
    </StyledProducts>
  );
};
