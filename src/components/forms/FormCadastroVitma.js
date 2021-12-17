import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import FormField from "../../components/forms/FormField";
import api from "../../apis/api";
import "../../assets/styles/cadastros.css";
import NavbarPaginas from "../NavbarPaginas"


function CadastroVitma(props) {
  const [state, setState] = useState({
    name: "",
    nickName: "",
    idade: "",
    email: "",
    estado: "",
    cidade: "",
    telefone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: null,
    nickName: null,
    idade: null,
    email: null,
    estado: null,
    cidade: null,
    telefone: null,
    password: null,
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(false);
      const response = await api.post(
        "/cadastra-vitma",
        state
      );
      console.log(response);

      setLoading(true);
      navigate("/");
    } catch (err) {
      if (err.response) {
        console.error(err.response);
        return setErrors({ ...err.response.data.errors });
      }

      console.error(err);
      setLoading(false);
    }
    setErrors("O campo senha e confima senha são diferentes");
  }

  return (
    <div>
      <NavbarPaginas />

      <div>
        <div className="container div-cadastros">
          <div className="col-8">
            {/* cadastrando a vitma no sistema */}

            <h3>Cadastrar</h3>
            <form onSubmit={handleSubmit}>
              <FormField
                label="Nome:"
                type="text"
                name="name"
                required
                id="signupFormName"
                value={state.name}
                error={errors.name}
                onChange={handleChange}
                readOnly={loading}
              />

              <FormField
                label="Nickname:"
                type="text"
                name="nickName"
                required
                id="signupFormNickName"
                error={errors.nickName}
                onChange={handleChange}
                value={state.nickName}
                readOnly={loading}
              />

              <FormField
                label="Idade:"
                type="number"
                name="idade"
                required
                id="signupForIdade"
                value={state.idade}
                error={errors.idade}
                onChange={handleChange}
                readOnly={loading}
              />

              <FormField
                label="Email:"
                type="email"
                name="email"
                required
                id="signupFormEmail"
                value={state.email}
                error={errors.email}
                onChange={handleChange}
                readOnly={loading}
              />

              <FormField
                label="Estado:"
                type="text"
                name="estado"
                required
                id="signupFormEstado"
                error={errors.estado}
                onChange={handleChange}
                value={state.estado}
                readOnly={loading}
              />

              <FormField
                label="Cidade:"
                type="text"
                name="cidade"
                required
                id="signupFormCidade"
                error={errors.cidade}
                onChange={handleChange}
                value={state.cidade}
                readOnly={loading}
              />

              <FormField
                label="Telefone:"
                type="text"
                name="telefone"
                required
                id="signupFormTelefone"
                error={errors.telefone}
                onChange={handleChange}
                value={state.telefone}
                readOnly={loading}
              />

              <FormField
                label="Senha:"
                type="password"
                name="password"
                required
                id="signupFormPassword"
                error={errors.password}
                onChange={handleChange}
                value={state.password}
                readOnly={loading}
              />

              <button
                disabled={loading}
                className="btn  mt-3 botoes"
                type="submit"
              >
                {loading ? (
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : null}
                cadastrar
              </button>
              <div className="link-botao"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroVitma;
