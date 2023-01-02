import React from "react"
import ReactDOM from "react-dom/client"
import { ToastContainer } from "react-toastify";
import {App} from "./App"
import { Providers } from "./context/Provider";
import { GlobalStyle } from './styles/global'
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <UserProvider>
          <CartProvider>
            <App />
          </CartProvider>
      </UserProvider>
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
    </Router>
  </React.StrictMode>
)


