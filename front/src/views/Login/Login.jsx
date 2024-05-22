import { useEffect, useState } from "react";
import validateLogin from "../../utils/validateLogin";
import styles from "./Login.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/reducer";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors(validateLogin(userData));
  };

  useEffect(()=>{
    setErrors(validateLogin(userData))
  },[userData])

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length) {
      alert("Información invalida, complete el formulario");
    }else{
        axios.post("http://localhost:8080/users/login", userData)
        .then(res => {
            if(res.data.loggin){
              dispatch(loginUser({login:res.data.user}))
              navigate("/home")
            }
        })
        .catch(err => {
          alert(`${err.response.data.message}`)
        })
    }
  };

  return (
    <form className={styles.form} onSubmit={handleOnSubmit}>
      <h1>LOGIN</h1>

      <div>
        <label>USERNAME</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleInput}
        />
        {errors.username && (
          <span style={{ color: "green", fontWeight:"600", fontStyle:"italic" }}>
            {errors.username}
          </span>
        )}
      </div>

      <div>
        <label>PASSWORD</label>
        <input
          type="password"
          name="password"
          placeholder="********"
          value={userData.password}
          onChange={handleInput}
        />
        {errors.password && (
          <span style={{ color: "green", fontWeight:"600", fontStyle:"italic" }}>
            {errors.password}
          </span>
        )}
      </div>

      <button
        disabled={
          Object.values(userData).some((value) => value === "") || // Verifica si algún campo está vacío
          Object.keys(errors).length > 0
        }
      >
        LOGIN
      </button>

      <span>No estas registrado? <Link to={`/register`} >Registrate</Link></span>
    </form>
  );
};

export default Login;
