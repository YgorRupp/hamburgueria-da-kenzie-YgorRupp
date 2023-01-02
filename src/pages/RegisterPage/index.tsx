import React from "react";
import RegisterForm from "../../components/RegisterForm";
import { StyledDivRegister } from "./style";
import logo from "../../assets/Mask Group.svg";
import textLogin from "../../assets/TextoLogin.svg";
import shoppingBag from "../../assets/shopping-bag.svg";

const RegisterPage = () => {
  return (
    <StyledDivRegister>
      <div>
        <img src={logo} alt="" />
        <div className="containerImage">
          <img src={shoppingBag} alt="" />
          <img src={textLogin} alt="" />
        </div>
      </div>
      <RegisterForm />
    </StyledDivRegister>
  );
};

export default RegisterPage;
