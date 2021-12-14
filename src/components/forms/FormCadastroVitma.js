


function FormVitma(props) {
    return (
      <div className="container mt-3">
        <div className="mt-3 mb-3">
          <h1>Cadastrar Vitma</h1>
        </div>
        {/* Formulario de criacao do cadastro de familias */}
        <form>
          {/* campo de nome */}
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">Nome:</label>
              <input
                type="text"
                className="form-control"
                id="inputNome"
                placeholder="Digite seu nome"
              />
            </div>

            {/* campo da senha */}
            <div class="form-group col-md-6">
              <label for="inputPassword4">Sobrenome:</label>
              <input
                type="text"
                className="form-control"
                id="inputSobrenome"
                placeholder="Digite seu sobrenome"
              />
            </div>
          </div>

          {/* campo do cep */}
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">Idade:</label>
              <input
                type="text"
                className="form-control"
                id="inputIdade"
                placeholder="Digite sua idade"
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
                  placeholder="Digite seu email"
                />
              </div>
            </div>
          </div>
          {/* campo do email */}
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">Estado:</label>
              <input
                type="text"
                className="form-control"
                id="inputEstado"
                placeholder="Digite seu estado"
              />
            </div>

            {/* campo da senha */}
            <div class="form-group col-md-6">
              <label for="inputPassword4">Cidade::</label>
              <input
                type="text"
                className="form-control"
                id="inputCidade"
                placeholder="Digite sua cidade"
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">Email:</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Digite seu email"
              />
            </div>

            {/* campo da senha */}
            <div class="form-group col-md-6">
              <label for="inputPassword4">Senha:</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Digite sua senha"
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

export default FormVitma;







 