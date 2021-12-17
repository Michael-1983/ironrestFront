import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/Home";
import CadastroVitma from "../components/forms/FormCadastroVitma";
import Login from "../pages/auth/LoginVitma";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import { AuthContextComponent } from "../contexts/authContext";
import Posts from "../pages/auth/Posts";
import Sobre from "./Sobre";
import CadastroFamilia from "../components/forms/CadastroFamilia"
import PostList from "../pages/Posts/PostList";
import PostCreate from "../pages/Posts/CriaPost"
import EditPost from "../pages/Posts/EditPost"
import PostDetail from "../pages/Posts/PostDeteils";

function App() {
  return (
    <div className="background">
      <AuthContextComponent>
        <Routes>
          <Route path="/post" element={<Posts />} />
          <Route path="/" element={<Home />} />
          <Route path="/cadastra-vitma" element={<CadastroVitma />} />
          <Route path="/cadastra-familia" element={<CadastroFamilia />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/lista-post"
            element={<ProtectedRoute component={<PostList />} />}
          />
          <Route path="/atualizarPost" element={<EditPost />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cadastro-post" element={<PostCreate />} />
          <Route
            path="/detalhe-post/:id"
            element={<ProtectedRoute component={<PostDetail />} />}
          />
        </Routes>
      </AuthContextComponent>
    </div>
  );
}
export default App;
