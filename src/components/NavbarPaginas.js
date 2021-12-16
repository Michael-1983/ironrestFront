import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import "../assets/styles/navbarPaginas.css";

function NavbarPaginas() {
  const { loggedInUser, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h1 className="TituloP">Marias da Penha</h1>
      <div>
        <Link to="/home">
          {" "}
          <i class="fas fa-home"></i>
        </Link>
        <a href="http://globo.com"> Disfarce</a>
      </div>
      <div>
        {loggedInUser.user._id ? (
          <>
            <span>Bem-vindo, {loggedInUser.user.name}</span>
            <button onClick={logout} className="btn btn-link">
              Sair
            </button>
          </>
        ) : (
          <Link
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/login"
          >
            Entrar
          </Link>
        )}
      </div>
    </nav>
  );
}

export default NavbarPaginas;
