import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import api from "../../apis/api";
import FormField from "../../components/forms/FormField";
import "../../assets/styles/criaPost.css";

function EditPost(props) {
  const [userData, setUserData] = useState({
    nickName: "",
    idade: "",
    estado: "",
    cidade: "",
    descricao: "",
  });

  // Loading
  const [loading, setLoading] = useState(false);

  const { id } = useParams(props);

  const navigate = useNavigate();

  useEffect(() => {
    async function user() {
      try {
        const response = await api.get(`/detalhe-post/${id}`);

        setUserData({ ...userData, ...response.data });
      } catch (e) {
        console.log(e);
      }
    }
    user();
  }, [id]);

  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.patch(`/atualiza-post/${id}`, userData);

      console.log(response);

      setLoading(false);

      navigate("/");
    } catch (err) {
      setLoading(false);
      console.error(err);
      if (err.response) {
        console.error(err.response);
      }
    }
  }

  return (
    <>
      <NavbarPaginas />
      <h1 className="text-center mt-5 mb-4">Editar Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="container">
          <FormField
            label="NickName"
            id="postFormName"
            required
            name="nickName"
            onChange={handleChange}
            value={userData.nickName}
            readOnly={loading}
          />

          <FormField
            label="Idade"
            id="idade"
            required
            name="idade"
            onChange={handleChange}
            value={userData.idade}
            readOnly={loading}
          />

          <FormField
            type="text"
            label="Estado"
            id="postEstado"
            required
            name="estado"
            onChange={handleChange}
            value={userData.estado}
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
              value={userData.descricao}
              readOnly={loading}
            />
          </div>
          <div className="container"></div>
          <div>
            <button disabled={loading} type="submit" className="botaoCriar">
              {loading ? (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : null}
              AtualizarPost
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditPost;
