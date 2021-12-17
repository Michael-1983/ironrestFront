import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
 

  const navigate = useNavigate();

  function handleChange(event) {
    setFamilia({
      ...familia,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();



    try {
      
      const response = await api.post(
        "/cadastra-familia",
        {...familia}
      );

      console.log("response", response);
      setLoading(false);
      navigate("/home");
    } catch (err) {
      

      console.error(err);
      setLoading(true);
    }
    
  }

  return (
    // cadastrando as familias que vão ajudar as vitmas
    <div>
      <NavbarPaginas />
      <div className="container div-cadastros">
        <div className="col-8">
          <h3>Ajude as vitmas de violência</h3>

          <div>
            {" "}
            <form onSubmit={handleSubmit}>
              <FormField
                label="Nome:"
                type="text"
                name="name"
                required
                id="FamFormName"
                value={familia.name}
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
                onChange={handleChange}
                readOnly={loading}
              />

              <FormField
                label="Cep:"
                type="text"
                name="cep"
                required
                id="FamFormCep"
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
                onChange={handleChange}
                value={familia.confirmPassword}
                readOnly={loading}
              />

              <button
                disabled={loading}
                className="btn botoes mt-3"
                type="submit"
              >
                cadastrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroFamilia;
