import { useState } from "react";

import FormField from "../../components/forms/FormField";

import api from "../../apis/api";
import { useNavigate } from "react-router-dom";

function PostCreate() {
  const [posts, setPosts] = useState({
    sobrenome: "",
    idade: "",
    estado: "",
    descricao: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    if (e.target.files) {
      return setPosts({
        ...posts,
        [e.target.sobrenome]: e.target.files[0],
      });
    }

    setPosts({ ...posts, [e.target.sobrenome]: e.target.value });
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
    <div className="container mb-5 p-5">
      <div className="col-8">
        <h1>Post</h1>
        <form onSubmit={handleSubmit}>
          <FormField
            label="Sobrenome"
            id="sobrenome"
            name="sobrenome"
            onChange={handleChange}
            value={posts.sobrenome}
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

          <div className="col-12">
            <textArea
              label="Conteudo"
              id="textConteudo"
              name="descricao"
              cols={84}
              rows={4}
              onChange={handleChange}
              value={posts.descricao}
              required
              readOnly={loading}
            />
          </div>

          <div className="mb-3 text-right">
            <button
              disabled={loading}
              type="submit"
              className="btn btn-primary"
            >
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
        </form>
      </div>
    </div>
  );
}
export default PostCreate;
