import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import "../assets/styles/navbarPaginas.css";

function NavbarPaginas() {
  const { loggedInUser, logout } = useContext(AuthContext);

  return (
    <nav className="navbarP">
      <h1 className="Titulo">Marias da Penha</h1>
      <div>
        <div className="buttonB">
          <a href="http://globo.com">Disfarce</a>
        </div>
      </div>
      <div>
        {loggedInUser.user._id ? (
          <>
            <span className="boasvindas">
              {" "}
              Bem-vindo, {loggedInUser.user.name}
            </span>
            <button onClick={logout} className="btn btn-link">
              Sair
            </button>
          </>
        ) : null}
        <Link className="buttonHome" to="/">
          <i className="fas fa-home"></i>
        </Link>
      </div>
    </nav>
  );
}

export default NavbarPaginas;
