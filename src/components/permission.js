import "../assets/styles/permission.css";
import NavbarPaginas from "../components/NavbarPaginas";
import LoginVitma from "../pages/auth/LoginVitma";
import LoginFamily from "../pages/auth/LoginFamily";
import "../assets/styles/home.css";

function permission() {
  return (
    <>
      <NavbarPaginas />

      <h1 className=" texto1">Você não possui permissão!</h1>
      <h1 className=" texto2">Cadastre-se ou faça o seu login</h1>
      <div className="homedivs">
        <div className="loginsPermission">
          <LoginVitma />
          <div className="container"></div>

          <LoginFamily />
        </div>
      </div>
    </>
  );
}
export default permission;
