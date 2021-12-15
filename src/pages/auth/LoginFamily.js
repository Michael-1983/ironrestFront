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
      const response = await api.post("/login", state);
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: "", email: "" });
      navigate("/");
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
        <h1 className="subtitle">Acolha uma vítima</h1>
        <div className="btn">
          <div className="btn-login">
            <button className="btn btn-danger mt-3 " type="submit">
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
              id="signupFormEmail"
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
              id="signupFormPassword"
              value={state.password}
              error={errors.password}
              onChange={handleChange}
            />
          </div>

          <button
            name="admin"
            onClick={handleclick}
            className="btn btn-light mt-3"
          >
            <Link to="/signup">
              Não tem uma conta? Clique aqui para cadastrar!
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;