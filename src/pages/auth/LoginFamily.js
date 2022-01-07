import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../apis/api";
import { AuthContext } from "../../contexts/authContext";
import "../../assets/styles/loginFamily.css";
import loginfamilia from "../../assets/images/familia.jfif";

function Login(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({ password: "", email: "" });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }
  function handleclick(event) {
    if (event.target.name === "admin") {
      return setState({ role: "ADMIN" });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/login-familia", state);
      navigate("/");

      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: "", email: "" });
      navigate("/login");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div className="Familia">
      <form onSubmit={handleSubmit}>
        <div className="loginFamilia">
          <img src={loginfamilia} alt="Familia" />
        </div>
        <h1 className="subtitle">Acolha uma vítima de violência doméstica</h1>
        <div className="btn">
          <div className="btn-login">
            <button className="btnLogin mt-3 " type="submit">
              Login
            </button>
          </div>
          <div className="email mt-3">
            <label htmlFor="signupFormEmail" className="ml-3">
              E-mail:
            </label>
            <input
              type="email"
              name="email"
              id="signupFormEmailFamily"
              value={state.email}
              error={errors.email}
              onChange={handleChange}
            />
          </div>

          <div className="senha mt-3">
            <label htmlFor="signupFormPassword" className="ml-3">
              Senha:{" "}
            </label>
            <input
              type="password"
              name="password"
              id="signupFormPasswordFamily"
              value={state.password}
              error={errors.password}
              onChange={handleChange}
            />
          </div>

          <button name="admin" onClick={handleclick} className="btnClick mt-3">
            <Link to="/family">
              Cadastre-se aqui e ajude uma vítima de violência doméstica!
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
