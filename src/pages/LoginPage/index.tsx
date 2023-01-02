import React from "react";
import LoginForm from "../../components/LoginForm";
import { StyledDivLogin } from "./style";
import logo from "../../assets/Mask Group.svg";
import textLogin from "../../assets/TextoLogin.svg";
import shoppingBag from "../../assets/shopping-bag.svg";





const LoginPage = () => {
  return (
    <StyledDivLogin>
      <LoginForm />
      <div>
        <img src={logo} alt="" />
        <div className="containerImage">
          <img src={shoppingBag} alt="" />
          <img src={textLogin} alt="" />
        </div>
      </div>
    </StyledDivLogin>
  );
};

export default LoginPage;
