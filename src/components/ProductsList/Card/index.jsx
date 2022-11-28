
import { StyledProducts } from "./style"

export const Products = ({product, addCurrentSale}) => {

  return (
    <StyledProducts>
        <div>
          <img src={product.img} alt={product.name} />
        </div>
        <section>
          <h2 className="title one">{product.name}</h2>
          <p className="paragraph two">{product.category}</p>
          <span className="subTitle two">{Number(product.price).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}</span>
        </section>
        <button id={product.id} className="subTitle two" onClick={() => addCurrentSale(product)}>Adicionar</button>
    </StyledProducts>
  )
}

