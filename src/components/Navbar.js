import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logout from "../pages/auth/Logout"
import { AuthContext } from "../contexts/authContext";
import { useHistory } from "react-router-dom";




function Navbar() {
    const { loggedInUser, logout } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-danger bg-danger text-white">
            <div className="container-fluid d-flex justify-content-between align-items-center text-light">
                <NavLink className="navbar-brand " to="/logout">
                    Projeto 3
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }
                                to="/post/create"
                            >
                                Posts
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }
                                to="/product/list"
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

                            <button onClick={<Logout/>} className="btn btn-link">
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