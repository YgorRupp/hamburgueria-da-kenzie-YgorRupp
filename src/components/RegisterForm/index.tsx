import React from "react";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";
import { registerSchema } from "./registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledDivRegisterForm, StyledLinkRegister } from "./style";

export interface iRegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormValues>({
    mode: "onBlur",
    // resolvers: yupResolver(registerSchema),
  });

  const submit: SubmitHandler<iRegisterFormValues> = (data) => {
    userRegister(data);
  };

  return (
    <>
      <StyledDivRegisterForm>
        <div>
          <h2>Cadastro</h2>
          <StyledLinkRegister to="/">Retornar para o login</StyledLinkRegister>
        </div>
        <form onSubmit={handleSubmit(submit)} noValidate>
          <label htmlFor="">Nome</label>
          <input
            id="name"
            type="text"
            placeholder="Nome"
            {...register("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <label htmlFor="">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            className="inputPassword"
            id="password"
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <input
            className="inputPassword"
            id="confirmPassword"
            type="password"
            placeholder="Confirmar Senha"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          <button type="submit">Cadastrar</button>
        </form>
      </StyledDivRegisterForm>
    </>
  );
};

export default RegisterForm;
