import { useDispatch, useSelector } from "react-redux";
import styles from "./ReservarTurno.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import validateTurn from "../../utils/validateTurn";
import axios from "axios";
import { createTurn } from "../../redux/reducer";

const ReservarTurno = () => {
  const navigate = useNavigate();
  const userIsLogin = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const [turnData, setTurnData] = useState({
    fecha:'',
    horario:'',
    descripcion:''
  })
  const [errors, setErrors] = useState({});

  useEffect(()=>{
    setErrors(validateTurn(turnData))
  },[turnData])

  const handleInput = (event) => {
    const { name, value } = event.target;
    setTurnData({
      ...turnData,
      [name]: value,
    });

    setErrors(validateTurn(turnData)); 
  };
  const postTurn = async () => {
    try {
      const {data} = await axios.post("http://localhost:8080/appointment/schedule",{
        date:turnData.fecha,
        time:turnData.horario,
        userId:userIsLogin.id,
        description:turnData.descripcion
      })
      const {id, date, time, status, descripcion} = data
        dispatch(createTurn({id, date, time, status, descripcion}))
        alert("Turno agendado con exito")
        navigate("/appointments")
    } catch (error) {
      console.log(error);
      alert(`Error al agendar el nuevo turno ${error}`)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length) {
      alert("Información invalida, complete el formulario");
    }else{
      console.log(turnData.fecha);
      postTurn()
    }
  }

  useEffect(() => {
    if (Object.keys(userIsLogin).length === 0) {
      navigate("/home");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
        <h1>Reservar Turno</h1>
        <p className={styles.horario}>El Horario de atención al cliente es de 8:00 a 18:00, porfavor tenerlo en cuenta a la hora de reservar un turno</p>
        <form onSubmit={handleSubmit}>
            <div>
                <label>FECHA </label>
                <input 
                type="Date" 
                name="fecha"
                value={turnData.fecha}
                onChange={handleInput}
                />
                {
                  turnData.fecha && (
                    <span style={{color:"red"}}>{errors.fecha}</span>
                  )
                }
            </div>
            <div>
                <label>HORARIO</label>
                <input 
                type="time" 
                name="horario"
                value={turnData.horario}
                onChange={handleInput} />
                {
                  turnData.horario && (
                    <span style={{color:"red"}}>{errors.horario}</span>
                  )
                }
            </div>
            <div>
                <label>DESCRIPCION</label>
                <input 
                type="text"
                name="descripcion"
                placeholder="Descripcion"
                value={turnData.descripcion}
                onChange={handleInput}
                 />
                 {
                  turnData.descripcion && (
                    <span style={{color:"red"}}>{errors.descripcion}</span>
                  )
                }
            </div>

            <button 
            disabled={
              Object.values(turnData).some((value) => value === "") || // Verifica si algún campo está vacío
              Object.keys(errors).length > 0
            }>Agendar Turno</button>
        </form>
    </div>
  );
};

export default ReservarTurno;
