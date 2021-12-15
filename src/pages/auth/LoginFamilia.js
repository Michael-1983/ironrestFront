import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../apis/api";

import { AuthContext } from "../../contexts/authContext";

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

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post(
        "http://localhost:4000/api/login-familia",
        state
      );
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: "", email: "" });
      navigate("/home ");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div className="container-fluid  d-block justify-content-start">
      <div className="row">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            
            <h1>Entrar</h1>
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
            <div className="btn">
              <div className="btn-login">
                <button className="btn btn-danger mt-3 " type="submit">
                  Entrar
                </button>
              </div>
              <span>
                <Link to="/signup">
                  Não tem uma conta? Clique aqui para cadastrar!
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
