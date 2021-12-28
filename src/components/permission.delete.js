import "../assets/styles/permission.css";
import NavbarPaginas from "./NavbarPaginas";

import "../assets/styles/home.css";

function permission() {
  return (
    <>
      <NavbarPaginas />

      <h1 className=" texto1">Você só pode deletar um post seu!</h1>
      <div className="homedivs">
        <div className="loginsPermission">
          <div className="container"></div>
        </div>
      </div>
    </>
  );
}
export default permission;
