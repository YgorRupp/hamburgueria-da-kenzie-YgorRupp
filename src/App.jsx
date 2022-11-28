import { useEffect, useState } from "react"
import {HomePage} from "./pages/home"
import { api } from "./services/api"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export function App() {
  const [list, setList] = useState([])
  const [currentSale, setCurrentSale] = useState([])
  const [filter, setFilter] = useState("")

  const filterProducts = list.filter((product) =>
    filter === "" ? true : product.name === filter
  )

  function addCurrentSale(product) {
    if (!currentSale.some((productCart) => productCart.id === product.id)) {
      setCurrentSale([...currentSale, product])
      toast.success("Produto adcionado ao carrinho")
    } else {
      toast.error("Esse produto já foi adcionado")
    }
  }
  function remove(id) {
    const newList = currentSale.filter((product) => product.id !== id);
    console.log(id)
    setCurrentSale(newList);
    toast.warn("Produto removido com sucesso")
  }

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("products")

        setList(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    getProducts()
  }, [])
  return (
    <>
      <div className="App">
        <HomePage
          filter={filter}
          setFilter={filter}
          list={list}
          addCurrentSale={addCurrentSale}
          currentSale={currentSale}
          remove={remove}
        ></HomePage>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}
