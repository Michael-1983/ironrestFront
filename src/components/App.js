import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../pages/Home";
import Signup from "../pages/auth/CadastroVitma";
import Login from "../pages/auth/LoginVitma";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
 import { AuthContextComponent } from "../contexts/authContext"
import CadastroFamilia from "./forms/CadastroFamilia"
import Navbar from "../components/Navbar"


function App() {
  return (
    <div>
      <AuthContextComponent>
        <Navbar />
        <Home />

        <Routes>
          <Route path="/home" element={<ProtectedRoute component={Home} />} />
          <Route path="/signup" element={<Signup />} />
{/* <Route path="/login" element={<Login />} /> */}
          <Route path="/signup/familia" element={<CadastroFamilia />} />
          <Route path="/post" />
        </Routes>
      </AuthContextComponent>
    </div>
  );
}

export default App;
