import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import "../assets/styles/navbar.css";





function Navbar() {
  const { loggedInUser, logout } = useContext(AuthContext);
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="Titulo">Marias da Penha</h1>
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
        <div className="Links" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"></li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/lista-post"
              >
                lista Posts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/login-familia"
              >
                Suporte
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
export default Navbar;
