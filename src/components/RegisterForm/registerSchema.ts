import * as yup from "yup"

export const registerSchema = yup.object().shape({

    name: 
    yup.string()
    .required("O nome é obrigatorio.")
    .min(3, "O nome precisa ter pelo menos 3 caracteres.")
    .max(200, "O nome pode ter no maximo 200 caracteres."),

    email: 
    yup.string()
    .required("O email é obrigatorio.")
    .email("É Necessario fornecer um email"),

    password: 
    yup.string()
    .required("A senha é obrigatoria.")
    .matches(/(?=.*?[A-Z])/, "E necessario pelo menos uma letra maiuscula")
    .matches(/(?=.*?[a-z])/, "E necessario pelo menos uma letra minuscula")
    .matches(/(?=.*?[0-9])/, "E necessario pelo menos um numero")
    .matches(/(?=.*?[#?!@$%^&*-])/, "E necessario pelo menos um caractere especial")
    .matches(/.{8,}/, "E necessario no minimo 8 caracteres"),

    confirmPassword: 
    yup.string()
    .required("A confirmção de senha é obrigatoria")
    .oneOf([yup.ref("password")], "A confirmção precisa corresponder a senha"),

})