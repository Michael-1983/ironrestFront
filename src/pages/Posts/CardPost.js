import { Link } from "react-router-dom";

function CardPost(props) {
    return (
      <div className="card posts" style={{ width: "18rem", height: "18rem" }}>
        <div className="card-body">
          <h2 className="card-title">{props.sobrenome}</h2>
          <h3> {props.sobrenome} </h3>
          <h3> {props.idade} </h3>
          <h3> {props.estado} </h3>
          <h3> {props.cidade} </h3>
          <p className="card-text">{props.descricao}</p>
          <div>
            <Link to="/lista-post" className="btn botoes">
              Ver Detalhe
            </Link>{" "}
          </div>
        </div>

        <div className="">
          <button className="botoes">Deletar</button>
        </div>
        <div className="">
          <button className="botoes">Editar</button>
        </div>
      </div>
    );
}

export default CardPost;