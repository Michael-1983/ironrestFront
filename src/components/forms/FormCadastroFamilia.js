import { useState } from "react";
import axios from "axios";

//cadas familia

function FormCadastroFamilia() {
  const [formFamilia, setFormFamilia] = useState({
    Nome: "",
    endereço: "",
    Cep: "",
    Email: "Sujestão",
    Password: "",
  });
  

  function handleSubmit(event) {
    event.preventDefault();
    

    axios
      .post("http://localhost:3000/api/cadastra-familia", formFamilia)
      .then((response) => {
      })
      .catch((err) => {
      });
  }

  return (
    <div className="container mt-3">
      <div className="mt-3 mb-3">
        <h1>Cadastrar Familia</h1>
      </div>
      {/* Formulario de criacao do cadastro de familias */}
      <form onSubmit={handleSubmit}>
        {/* campo de nome */}
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">Nome:</label>
            <input
              type="text"
              className="form-control"
              id="inputNome"
              placeholder="Digite seu email"
              value={formFamilia.inputNome}
            />
          </div>

          {/* campo da senha */}
          <div class="form-group col-md-6">
            <label for="inputPassword4">Endereço:</label>
            <input
              type="text"
              className="form-control"
              id="inputEndereco"
              placeholder="Digite sua senha senha"
              value={formFamilia.inputEndereco}
            />
          </div>
        </div>

        {/* campo do cep */}
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">Cep:</label>
            <input
              type="text"
              className="form-control"
              id="inputCep"
              placeholder="Digite seu cep"
              value={formFamilia.inputCep}
            />
          </div>

          {/*campo telefone*/}
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">Telefone:</label>
              <input
                type="text"
                className="form-control"
                id="inputTel"
                placeholder="Digite seu telefone"
                value={formFamilia.inputTel}
              />
            </div>
          </div>
        </div>
        {/* campo do email */}
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">Email:</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Digite seu email"
              value={formFamilia.inputEmail}
            />
          </div>

          {/* campo da senha */}
          <div class="form-group col-md-6">
            <label for="inputPassword4">Senha:</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Digite sua senha senha"
              value={formFamilia.inputPassword}
            />
          </div>
        </div>

        {/* botão cadastrar familia */}
        <button type="submit" class="btn btn-danger">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
export default FormCadastroFamilia;
