import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/Home";
import CadastroVitma from "../components/forms/FormCadastroVitma";
import Login from "../pages/auth/LoginVitma";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import { AuthContextComponent } from "../contexts/authContext";
import Posts from "../pages/auth/Posts";
import Sobre from "./Sobre";

function App() {
  return (
    <div className="background">
      <AuthContextComponent>
        <Routes>
          <Route path="/post" element={<Posts />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<CadastroVitma />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<ProtectedRoute component={Posts} />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </AuthContextComponent>
    </div>
  );
}
export default App;
