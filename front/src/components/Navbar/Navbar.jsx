import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/reducer";

const Navbar = () => {
  const userIsLogin = useSelector((state) => state.user);
  const dispatch = useDispatch()

  

  const cerrarSesion = () => {
    dispatch(logoutUser([{},[]]))
  }

  return (
    <nav className={styles.nav}>
      <img
        src="./LogoBank.png"
        alt="Logo de la pagina"
        className={styles.logo}
      />
      <div className={styles.container}>
        {
          !Object.keys(userIsLogin).length ?
            <div className={styles.linksContainer}>
              <Link to="/home">Home</Link>
              <Link to="/register">Registrarse</Link>
              <Link to="/">Ingresar</Link>
            </div>:
            <div className={styles.linksContainer}>
              <Link to="/home">Home</Link>
              <Link to="/appointments">Mis turnos</Link>
              <Link to='./bookAnAppointment'>Reservar un Turno</Link>
              <Link to='./'onClick={cerrarSesion}>Cerrar Sesion</Link>
            </div>
        }
      </div>
      <img src="./LogoUser.png" alt="Logo de User" className={styles.logo} />
    </nav>
  );
};

export default Navbar;
