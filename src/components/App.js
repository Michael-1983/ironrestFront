import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Home from "../pages/Home";
import CadastroVitma from "../components/forms/FormCadastroVitma";
import Login from "../pages/auth/LoginVitma";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import { AuthContextComponent } from "../contexts/authContext";
import Navbar from "../components/Navbar"
import Posts from "../pages/auth/Posts"
import CadastraPost from "../components/forms/CadastraPost";


function App() {
  return (
    <div className="background">
      <AuthContextComponent>
        <Navbar />

        <Routes>
          <Route path="/post" element={<Posts />} />
          <Route path="/" element={<Home />} />
          <Route path="/cadastra-vitma" element={<CadastroVitma />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/cadastro-post"
            element={<ProtectedRoute component={<CadastraPost />} />}
          />
          <Route path="/" element={<ProtectedRoute component={<Home />} />} />
        </Routes>
      </AuthContextComponent>
    </div>
  );
}
export default App;
