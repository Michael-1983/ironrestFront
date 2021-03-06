import { Link } from "react-router-dom";
import "../../assets/styles/postlist.css";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";

function CardPost(props) {
  const { loggedInUser } = useContext(AuthContext);
  return (
    <div className="card" style={{ width: "59rem", height: "20rem" }}>
      <div className="card-body">
        <h3 className="nickname">{props.nickName}</h3>
        <h3 className="idade">
          {props.idade} {"anos"}
        </h3>
        <h3 className="estado">
          {"Estado:"} {props.estado}
        </h3>
        <p className="card-text cols=6 rows=4">{props.descricao}</p>
        {loggedInUser.user._id === props.userId ? (
          <>
            <div className="editar">
              <Link to={`/editar-post/${props._id}`}>Editar</Link>
            </div>
            <div className="deletar">
              <Link to={`/delete/${props._id}`}>Deletar</Link>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default CardPost;
