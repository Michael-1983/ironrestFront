import Card  from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function CardPost(props) {
    return (
      <div>
        <Link to={`/post/${props._id}`}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{props.sobrenome}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {props.idade}
              </Card.Subtitle>
              <Card.Text>{props.estado}</Card.Text>
              <Card.Text>{props.descricao}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Button type="button">Editar</Button>{" "}
      </div>
    );
}

export default CardPost;