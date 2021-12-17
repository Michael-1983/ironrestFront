import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/Home";
import CadastroVitma from "../components/forms/FormCadastroVitma";
import Login from "../pages/auth/LoginVitma";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import { AuthContextComponent } from "../contexts/authContext";
import Posts from "../pages/auth/Posts";
import Sobre from "./Sobre";
import CadastroFamilia from "./forms/CadastroFamilia";
import CriaPost from "../components/../pages/Posts/CriaPost";

function App() {
  return (
    <div className="background">
      <AuthContextComponent>
        <Routes>
          <Route path="/post" element={<Posts />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<CadastroVitma />} />
          <Route path="/family" element={<CadastroFamilia />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<ProtectedRoute component={Posts} />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cadastro-post" element={<CriaPost />} />
        </Routes>
      </AuthContextComponent>
    </div>
  );
}
export default App;
