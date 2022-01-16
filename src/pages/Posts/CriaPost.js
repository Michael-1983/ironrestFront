import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../../components/forms/FormField";
import NavbarPaginas from "../../components/NavbarPaginas";
import "../../assets/styles/criaPost.css";

import api from "../../apis/api";

function PostCreate() {
  const [posts, setPosts] = useState({
    nickName: "",
    idade: "",
    estado: "",
    cidade: "",
    descricao: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  function handleChange(e) {
    if (e.target.files) {
      return setPosts({
        ...posts,
        [e.target.name]: e.target.files[0],
      });
    }

    setPosts({ ...posts, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/cadastro-post", {
        ...posts,
      });
      navigate("/");

      console.log(response);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  return (
    <>
      <NavbarPaginas />

      <h1 className="conteSua">Conte aqui a sua história de forma anônima</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <FormField
            label="Nickname"
            id="postFormName"
            name="nickName"
            onChange={handleChange}
            value={posts.nickName}
            required
            readOnly={loading}
          />

          <FormField
            label="Idade"
            id="productFormManufacturer"
            name="idade"
            onChange={handleChange}
            value={posts.idade}
            required
            readOnly={loading}
          />

          <FormField
            type="text"
            label="Estado"
            id="postEstado"
            name="estado"
            onChange={handleChange}
            value={posts.estado}
            required
            readOnly={loading}
          />

          <div className="descricao">
            <textArea
              label="Conteudo"
              id="textConteudo"
              name="descricao"
              cols={133}
              rows={15}
              onChange={handleChange}
              value={posts.descricao}
              required
              readOnly={loading}
            />
          </div>
          <div className="container"></div>

          <div>
            <button disabled={loading} type="submit" className="botaoCriar">
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>{" "}
                  <span>Carregando...</span>{" "}
                </>
              ) : (
                "Criar "
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default PostCreate;
