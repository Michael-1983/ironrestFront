import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import "../assets/styles/navbarPaginas.css";

function NavbarPaginas() {
  const { loggedInUser, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h1 className="Titulo">Marias da Penha</h1>

      <Link className="buttonHome" to="/">
        <i class="fa-solid fa-house"></i>
      </Link>
      <a className="buttonB" href="https://receitas.globo.com">
        Disfarce
      </a>

      <div>
        {loggedInUser.user._id ? (
          <>
            <span className="boasvindas">
              Bem-vindo, {loggedInUser.user.name}
            </span>
            <div className="botaoSair">
              <button onClick={logout} className="btn btn-link">
                Sair
              </button>
            </div>
            <Link className="buttonChat" to="/chat-room">
              Bate Papo
            </Link>
          </>
        ) : null}
      </div>
    </nav>
  );
}

export default NavbarPaginas;
