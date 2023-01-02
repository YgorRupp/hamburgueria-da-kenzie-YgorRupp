import React from "react";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";
import { loginSchema } from "./loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledDivLoginForm, StyledLink } from "./style";

export interface iLoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const submit: SubmitHandler<iLoginFormValues> = (data) => {
    userLogin(data);
  };
  return (
    <StyledDivLoginForm>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <h2>Login</h2>
        <label htmlFor="">Nome</label>
        <input
          id="email"
          type="text"
          placeholder="Digite o seu email"
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor="">Senha</label>
        <input
          id="password"
          type="password"
          placeholder="Digite a sua senha"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">Logar</button>
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
        <StyledLink to="/register">Cadastrar</StyledLink>
      </form>
    </StyledDivLoginForm>
  );
};

export default LoginForm;
