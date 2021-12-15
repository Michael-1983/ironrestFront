import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/Home";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import Navbar from "./Navbar";
import Posts from "./forms/FormCadastroVitma";
import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <div className="background">
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<ProtectedRoute component={Posts} />} />
        </Routes>
      </AuthContextComponent>
    </div>
  );
}

export default App;
