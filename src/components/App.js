import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/Home";
import CadastroVitma from "../components/forms/FormCadastroVitma";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import { AuthContextComponent } from "../contexts/authContext";
import Posts from "../pages/auth/Posts";
import Sobre from "./Sobre";
import CadastroFamilia from "./forms/CadastroFamilia";
import CriaPost from "../components/../pages/Posts/CriaPost";
import DeletePost from "../pages/Posts/DeletePost";
import EditPost from "../pages/Posts/EditPost";
import Permission from "../components/permission";
import AppChat from "../components/forms/AppChat";

function App() {
  return (
    <div className="background">
      <AuthContextComponent>
        <Routes>
          <Route path="/post" element={<Posts />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<CadastroVitma />} />
          <Route path="/family" element={<CadastroFamilia />} />
          <Route path="/login" element={<Home />} />
          <Route path="/permission" element={<Permission />} />
          <Route path="/post" element={<ProtectedRoute component={Posts} />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cadastro-post" element={<CriaPost />} />
          <Route path="/chat-room" element={<AppChat />} />
          <Route
            path="/editar-post/:id"
            element={<ProtectedRoute component={EditPost} />}
          />
          <Route
            path="/delete/:id"
            element={<ProtectedRoute component={DeletePost} />}
          />
        </Routes>
      </AuthContextComponent>
    </div>
  );
}
export default App;
