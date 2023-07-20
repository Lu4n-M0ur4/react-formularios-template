import React, { useState } from 'react'
import { ContainerForm, ContainerSignup, Input } from './styled'
import useForm from '../../hooks/useForm';

export default function Signup() {

    const { form, onChangeInput, clearFild } = useForm({
        name:"",
        email: "",
        password: "",
        confirmPassword: ""
      });


    // const [nomeUsuario, setNomeUsuario] = useState("")
    // const [email, setEmail] = useState("")
    // const [senha, setSenha] = useState("")
    // const [confirmaSenha, setConfirmaSenha] = useState("")

    // const onChangeNome = (e) => {
    //     setNomeUsuario(e.target.value)
    // }
    // const onChangeEmail = (e) => {
    //     setEmail(e.target.value)
    // }
    // const onChangeSenha = (e) => {
    //     setSenha(e.target.value)
    // }
    // const onChangeConfirmaSenha = (e) => {
    //     setConfirmaSenha(e.target.value)
    // }

    const enviarCadastro = (e) => {
        //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
        if (form.password === form.confirmPassword) {
            console.log({form})
            clearFild(e)
        }else {
            e.preventDefault()
            alert('Senha Diferente')
        }
    }

    return (
        <ContainerSignup>
            <ContainerForm onSubmit={enviarCadastro}>
                <label htmlFor='nome'>Nome de usuario:</label>
                <Input
                    name='name'
                    id='nome'
                    value={form.name}
                    onChange={onChangeInput}
                    placeholder="username"
                    required
                />
                <label htmlFor='email'>Email:</label>
                <Input
                    name ='email'
                    id='email'
                    value={form.email}
                    onChange={onChangeInput}
                    placeholder="nome@email.com"
                    required
                />
                <label htmlFor='senha'>Senha:</label>
                <Input
                    name ='password'
                    id='senha'
                    value={form.password}
                    onChange={onChangeInput}
                    placeholder="Crie sua senha"
                    required
                />
                <label htmlFor='confirma-senha'>Confirmação de senha:</label>
                <Input
                    name ='confirmPassword'
                    id='confirma-senha'
                    value={form.confirmPassword}
                    onChange={onChangeInput}
                    placeholder="Confirme a senha"
                    required
                />
                <button>Cadastrar</button>
            </ContainerForm>
        </ContainerSignup>
    )
}
