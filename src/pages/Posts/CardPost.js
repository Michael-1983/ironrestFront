import { Link } from "react-router-dom";
import "../../assets/styles/postlist.css";

function CardPost(props) {
  return (
    <div className="card carddivs" style={{ width: "50rem", height: "20rem" }}>
      <div className="card-body">
        <h2 className="card-title">{props.nickName}</h2>
        <h3> {props.idade} </h3>
        <p class="card-text">{props.descricao}</p>
        <Link to="/lista-post" className="btn btn-primary" />
        Ver Lista
      </div>
    </div>
  );
}

export default CardPost;
