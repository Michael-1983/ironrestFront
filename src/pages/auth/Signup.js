import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../apis/api";

function Signup(props) {
  const [state, setState] = useState({ name: "", password: "", email: "" });
  const [errors, setErrors] = useState({
    name: null,
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
      const response = await api.post("/signup", state);
      setErrors({ name: "", password: "", email: "" });
      navigate("/login");
    } catch (err) {
      if (err.response) {
        console.error(err.response);
        return setErrors({ ...err.response.data.errors });
      }

      console.error(err);
    }
  }

  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <h1>Cadastrar</h1>

            <div className="mt-3">
              <label htmlFor="signupFormName">Nome</label>
              <input
                type="text"
                name="name"
                id="signupFormName"
                value={state.name}
                error={errors.name}
                onChange={handleChange}
              />
            </div>

            <div className="mt-3">
              <label htmlFor="signupFormEmail">E-mail</label>
              <input
                type="email"
                name="email"
                id="signupFormEmail"
                value={state.email}
                error={errors.email}
                onChange={handleChange}
              />
            </div>

            <div className="mt-3">
              <label htmlFor="signupFormPassword">Senha</label>
              <input
                type="password"
                name="password"
                id="signupFormPassword"
                value={state.password}
                error={errors.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <button className="btn btn-danger mt-3" type="submit">
                cadastrar
              </button>
              <span>
                <Link to="/login">
                  Already have an account? Click here to login.
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
