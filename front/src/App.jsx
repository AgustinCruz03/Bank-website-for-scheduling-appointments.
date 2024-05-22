/* eslint-disable no-unused-vars */
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import MisTurnos from "./views/MisTurnos/MisTurnos";
import Register from "./views/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import ReservarTurno from "./views/reservarTurno/ReservarTurno";
          // import { useSelector } from "react-redux";   


function App() {
                    // const userLogin = useSelector((state) => state.user)
  // const location = useLocation()
  return (
    <>
      {/* {(location.pathname !== '/' && location.pathname !== '/register' )&&<Navbar />} */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointments" element={<MisTurnos />} />
        <Route path="/bookAnAppointment" element={<ReservarTurno/>} />
      </Routes>
    </>
  );
}

export default App;
