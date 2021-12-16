import { Link } from "react-router-dom";

function CardPost(props) {
    return (
      <div class="card" style={{ width: "18rem", height: "18rem" }}>
        
        <div class="card-body">
          <h2 class="card-title">{props.sobrenome}</h2>
          <h3> {props.sobrenome} </h3>
          <h3> {props.idade} </h3>
          <h3> {props.estado} </h3>
          <h3> {props.cidade} </h3>
          <p class="card-text">{props.descricao}</p>
          <Link href="/lista-post" class="btn btn-primary" />
          Ver Lista
        </div>
      </div>
    );
}

export default CardPost;