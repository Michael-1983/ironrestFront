import React from "react";
import { Link } from "react-router-dom";
import Cadastrar from "../pages/auth/Signup";
import { NavLink } from "react-router-dom";

import Slide from "../components/Slide";


function Home() {
  return 
    
  
    <div className="text-center">
      <img
        src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/84/original/logo-ironhack-blue.png"
        alt="ironhack logo"
      />
      <div className="slide"></div>
      <h1>Projeto 3</h1>
      <p>This is the homepage</p>
      <div className="d-flex flex-column align-items-center">
        <Link className="btn btn-lg btn-primary" to="/auth/signup">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/signup"
          >
            Suporte
          </NavLink>
          Signup here!
        </Link>
      </div>
    </div>;

}

export default Home;
