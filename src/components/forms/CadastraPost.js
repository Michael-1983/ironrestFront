function PostCreat() {
  return (
    <div className="container">
      <div className="cadastro">
        <h1>Cadastre Seu Post</h1>
      </div>
      {/* Formulario de criacao do cadastro de familias */}
      <form>
        {/* campo de nome */}
        <div class="form-row">
          {/* campo da senha */}
          <div class="form-group col-md-6">
            <label for="inputSobrenome">Sobrenome:</label>
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
            <label for="inputIdade">Idade:</label>
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
              <label for="inputCity">Estado:</label>
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
            <label for="inputEstado">Cidade:</label>
            <input
              type="text"
              className="form-control"
              id="inputEstado"
              placeholder="Digite seu estado"
            />
          </div>

          {/* campo da senha */}
          <div class="form-group col-md-6">
            <label for="inputCidade">Conteudo:</label>
            <textarea
              type="text-area"
              className="form-control"
              id="inputCidade"
              placeholder="Digite seu conteudo"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputImage">Imagem:</label>
            <input
              type="url"
              className="form-control"
              id="inputEmail"
              placeholder="Opcional"
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
export default PostCreat;
