import { useEffect, useState } from "react";
import axios from "axios";
import validate from "../../utils/validate";
import styles from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
  });

  const handlerInputs = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(validate(userData));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length) {
      alert("Información invalida, complete el formulario");
    } else {
      axios
        .post("http://localhost:8080/users/register", userData)
        .then(res => {
          alert("Usuario registrado con Exito")
          console.log(res.data);
          navigate('/')
        })
        .catch((err) => {
          console.log(err.message);
          alert("ha salido algo mal con el servidor, usuario no registrado");
        });
    }
  };

  useEffect(() => {
    //atento a esta linea que es comando divino para la validación jajsja
    setErrors(validate(userData));
  }, [userData]);

  return (
    <form onSubmit={handleOnSubmit} className={styles.form}>
      <h1 className={styles.title}>Formulario de Registro</h1>
      <div className={styles.divInput}>
        <label>NAME</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          placeholder="Name"
          onChange={handlerInputs}
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
      </div>

      <div className={styles.divInput}>
        <label htmlFor="">EMAIL</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          placeholder="user@mail.com"
          onChange={handlerInputs}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>

      <div className={styles.divInput}>
        <label htmlFor="">BIRTHDATE</label>
        <input
          type="date"
          name="birthdate"
          value={userData.birthdate}
          onChange={handlerInputs}
        />
        {errors.birthdate && (
          <span style={{ color: "red" }}>{errors.birthdate}</span>
        )}
      </div>

      <div className={styles.divInput}>
        <label htmlFor="">DNI</label>
        <input
          type="number"
          name="nDni"
          value={userData.nDni}
          placeholder="45674567"
          onChange={handlerInputs}
        />
        {errors.nDni && <span style={{ color: "red" }}>{errors.nDni}</span>}
      </div>

      <div className={styles.divInput}>
        <label htmlFor="">USERNAME</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          placeholder="Username"
          onChange={handlerInputs}
        />
        {errors.username && (
          <span style={{ color: "red" }}>{errors.username}</span>
        )}
      </div>

      <div className={styles.divInput}>
        <label htmlFor="">PASSWORD</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          placeholder="********"
          onChange={handlerInputs}
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password}</span>
        )}
      </div>

      <button
        disabled={
          Object.values(userData).some((value) => value === "") || // Verifica si algún campo está vacío
          Object.keys(errors).length > 0
        }
        className={styles.submitBtn}
      >
        Submit
      </button>

      <span>Ya tienes una cuenta? <Link to={`/`}>Inicia Sesión</Link></span>
    </form>
  );
};

export default Register;
