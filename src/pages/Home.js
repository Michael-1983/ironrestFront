import React from "react";
import { Link } from "react-router-dom";
import CadastroFamilia from "../components/forms/CadastroFamilia"




function Home() {
  return (
    <div>
      <div className="">
       
       <CadastroFamilia/> 
       
        <h1>Projeto 3</h1>
        <p>This is the homepage</p>
        <div className="d-flex flex-column align-items-center">
          <Link className="btn btn-lg btn-primary" to="/auth/signup">
            Signup here!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
