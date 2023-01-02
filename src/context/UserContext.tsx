import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iLoginFormValues } from "../components/LoginForm";
import { iRegisterFormValues } from "../components/RegisterForm";
import { api } from "../services/api";

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iLoginResponse {
  accessToken: string;
  user: iUser;
}

interface iUser {
  email: string;
  name: string;
  confirmPassword: string;
  id: number;
}

interface iRegisterResponse {
  accessToken: string;
  user: iRegister;
}

interface iRegister {
  email: string;
  name: string;
  id: number;
}

export interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
interface iUserContexet {
  user: iUser | null;
  userLogin: (formData: iLoginFormValues) => void;
  userRegister: (formData: iRegisterFormValues) => void;
  filterProducts: () => void;
  addCurrentSale: (product: iProductsCart) => void;
  currentSale: iProducts[];
  setCurrentSale: React.Dispatch<React.SetStateAction<iProducts[]>>;
  list: iProducts[];
  filter: iProducts[];
  setFilter: React.Dispatch<React.SetStateAction<iProducts[]>>;
  setItemFilter: React.Dispatch<React.SetStateAction<string>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  Logout: () => void;
}
interface iProductsCart {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

export const UserContext = createContext({} as iUserContexet);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [list, setList] = useState<iProducts[] | never[]>([] as iProducts[]);
  const [currentSale, setCurrentSale] = useState<iProducts[]>(
    [] as iProducts[]
  );
  const [filter, setFilter] = useState<iProducts[]>([] as iProducts[]);
  const [itemFilter, setItemFilter] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const userLogin = async (formData: iLoginFormValues) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.post<iLoginResponse>("/login", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@UserID", JSON.stringify(response.data.user));
      navigate("/homepage");
      setUser(response.data.user);
    } catch (error) {
      toast.error("Email ou senha invalidos");
    }
  };

  const userRegister = async (formData: iRegisterFormValues) => {
    try {
      const response = await api.post<iRegisterResponse>("/users", formData);
      navigate("/");
      toast.success("Usuario cadastrado com sucesso!");
    } catch (error) {
      toast.error("Não foi possivel cadastrar o usuario");
    }
  };
  const Logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@UserID");
    navigate("/");
  };
  function filterProducts() {
    const filteredProducts = itemFilter.toLowerCase().trim();

    const products = list.filter(
      (product) =>
        product.category.toLowerCase().includes(filteredProducts) ||
        product.name.toLowerCase().includes(filteredProducts)
    );
    products.length === 0
      ? toast.warn("Produto não encontrado")
      : setFilter(products);
  }

  function addCurrentSale(product: iProductsCart) {
    if (
      !currentSale.some(
        (productCart: iProductsCart) => productCart.id === product.id
      )
    ) {
      setCurrentSale([...currentSale, product]);
      toast.success("Produto adcionado ao carrinho");
    } else {
      toast.error("Esse produto já foi adcionado");
    }
  }
  useEffect(() => {
    async function getProducts() {
      const token = localStorage.getItem("@TOKEN");
      try {
        const response = await api.get<iProducts[]>("products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setList(response.data);
        setFilter(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, []);

  return (
    <UserContext.Provider
      value={{
        setItemFilter,
        user,
        currentSale,
        list,
        setFilter,
        filterProducts,
        filter,
        addCurrentSale,
        userLogin,
        userRegister,
        showModal,
        setShowModal,
        Logout,
        setCurrentSale,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
