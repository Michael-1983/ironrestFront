import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import "../assets/styles/navbarPaginas.css";
import IconeHome from "../../src/assets/images/pngtree-home-vector-icon-png-image_4070025.jpg";

function NavbarPaginas() {
  const { loggedInUser, logout } = useContext(AuthContext);

  return (
    <nav className="navbarP">
      <div className="container">
        <h1 className="TituloP">Marias da Penha</h1>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="LinksP" id="navbarNav">
          <ul className="navbar-navP">
            <li className="nav-item"></li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/sobre"
              >
                <img src={IconeHome} alt="home" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="https://https://receitas.globo.com/"
              >
                Disfarce
              </NavLink>
            </li>
          </ul>
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
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/login"
            >
              Entrar
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavbarPaginas;
