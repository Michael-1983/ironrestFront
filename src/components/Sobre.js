import React from "react";
import "../assets/styles/sobre.css";
import NavbarPaginas from "../components/NavbarPaginas";

function Sobre() {
  return (
    <div className="backgroundHome">
      <NavbarPaginas />

      <h1 className=" textoSobre text-center box d-flex flex-column justify-content-center align-items-center">
        O site Marias da Penha, nasceu da necessidade diante de uma situação
        alarmante em todo o mundo! Segundo as estatísticas, o Brasil é o 5º País
        no mundo com mais casos de violência contra a mulher! O nome "Marias da
        Penha", surgiu para mostrar que todas as mulheres vítimas podem ser
        "Marias da Penha" na luta pela justiça e pelo respeito!
      </h1>
      <div className="imagemSobre">
        <img
          src="https://www.informasus.ufscar.br/wp-content/uploads/2020/11/Tipos-de-violencia-contra-a-mulher.jpg"
          alt="dados sobre violência doméstica"
        ></img>
      </div>
    </div>
  );
}

export default Sobre;
