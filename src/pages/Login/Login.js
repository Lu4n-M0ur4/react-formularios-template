import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { irParaCadastro } from "../../Routes/coordinator";
import { ContainerForm, ContainerLogin, Input } from "./styled";
import useForm from "../../hooks/useForm";

export default function Login() {
  const { form, onChangeInput, clearFild } = useForm({
    email: "",
    password: "",
  });

  const enviaLogin = (e) => {
    clearFild(e);
  };

  const navigate = useNavigate();

  return (
    <ContainerLogin>
      <ContainerForm onSubmit={enviaLogin}>
        <label htmlFor="email">Email:</label>
        <Input
          name="email"
          id="email"
          value={form.email}
          onChange={onChangeInput}
          placeholder="nome@email.com"
          // pattern="/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i"
          title="Preencha um email válido"
          required
        />
        <label htmlFor="senha">Senha:</label>
        <Input
          name="password"
          id="senha"
          value={form.password}
          onChange={onChangeInput}
          placeholder="Digite sua senha"
          pattern="[0-9a-zA-Z$*&@#]{8,}"
          title="deve conter ao menos 8 dos caracteres mencionados"
          required
        />
        <button>Fazer Login</button>
      </ContainerForm>
      <button onClick={() => irParaCadastro(navigate)}>
        Ainda não tenho uma conta
      </button>
    </ContainerLogin>
  );
}

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");

// const onChangeEmail = (e) => {
//   setEmail(e.target.value);
// };
// const onChangeSenha = (e) => {
//   setPassword(e.target.value);
// };
// console.log(form.email,  form.password)
// e.preventDefault Passado para useForm;
