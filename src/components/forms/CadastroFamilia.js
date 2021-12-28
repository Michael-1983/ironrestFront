import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../apis/api";
import FormField from "./FormField";
import NavbarPaginas from "../NavbarPaginas";

function CadastroFamilia(props) {
  const [familia, setFamilia] = useState({
    name: "",
    email: "",
    cep: "",
    address: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    cep: null,
    address: null,
    phone: null,
    password: null,
    confirmPassword: null,
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setFamilia({
      ...familia,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (familia.password !== familia.confirmPassword) {
      return setErrors("senha e confirmação são diferentes");
    }

    try {
      setLoading(false);
      const response = await api.post(
        "http://localhost:4000/api/cadastra-familia",
        familia
      );
      setLoading(false);
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
    // cadastrando as familias que vão ajudar as vitmas
    <div>
      <NavbarPaginas />
      <div className="container">
        <h1>Ajude as vitmas de violência doméstica</h1>

        <form onSubmit={handleSubmit}>
          <FormField
            label="Nome:"
            type="text"
            name="name"
            required
            id="FamFormName"
            value={familia.name}
            error={errors.name}
            onChange={handleChange}
            readOnly={loading}
          />

          <FormField
            label="Email:"
            type="email"
            name="email"
            required
            id="FamFormEmail"
            value={familia.email}
            error={errors.email}
            onChange={handleChange}
            readOnly={loading}
          />

          <FormField
            label="Cep:"
            type="text"
            name="cep"
            required
            id="FamFormCep"
            error={errors.cep}
            onChange={handleChange}
            value={familia.cep}
            readOnly={loading}
          />

          <FormField
            label="Endereço"
            type="text"
            name="address"
            required
            id="FamFormEndereco"
            error={errors.address}
            onChange={handleChange}
            value={familia.address}
            readOnly={loading}
          />

          <FormField
            label="Telefone:"
            type="text"
            name="phone"
            required
            id="FamFormPhone"
            error={errors.phone}
            onChange={handleChange}
            value={familia.phone}
            readOnly={loading}
          />

          <FormField
            label="Senha:"
            type="password"
            name="password"
            required
            id="FamFormSenha"
            error={errors.password}
            onChange={handleChange}
            value={familia.password}
            readOnly={loading}
          />

          <FormField
            label="Confirma Senha:"
            type="password"
            name="confirmPassword"
            required
            id="signupForConfirSenha"
            error={errors.confirmaSenha}
            onChange={handleChange}
            value={familia.confirmPassword}
            readOnly={loading}
          />

          <button
            disabled={loading}
            className="btn btn-danger mt-3"
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
        </form>
      </div>
    </div>
  );
}

export default CadastroFamilia;
