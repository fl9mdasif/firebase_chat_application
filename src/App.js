import { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
// import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import NotFound from "./pages/shared/NotFound";
import './style.scss'
function App() {
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      navigate('/login')
    }
    return children;
  }

  return (
    <>
      <Routes>

        <Route path='/'>

          <Route index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
