import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import "../assets/styles/navbar.css";

function Navbar() {
  const { loggedInUser, logout } = useContext(AuthContext);
  return (
    <nav className="navbar">
      <h1 className="Titulo">Marias da Penha</h1>

      <Link className="buttonA" to="/sobre">
        Sobre
      </Link>
      <a className="buttonB" href="https://receitas.globo.com">
        Disfarce
      </a>

      <div className="botaoSair">
        {loggedInUser.user._id ? (
          <>
            <span className="boasvindas">
              Bem-vindo, {loggedInUser.user.name}
            </span>
            <div>
              <button onClick={logout} className="btn btn-link">
                Sair
              </button>
            </div>
          </>
        ) : null}
        <Link className="buttonChat" to="/chat-room">
          Bate Papo
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
