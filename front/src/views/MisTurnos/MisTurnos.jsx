import styles from "./MisTurnos.module.css";
import { useEffect } from "react";
import Turn from "../../components/Turn/Turn";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadingTurns } from "../../redux/reducer";
import NoHayTurnos from "../../components/NoHayTurnos/NoHayTurnos";

const MisTurnos = () => {
  const userIsLogin = useSelector((state) => state.user)
  const turnList = useSelector(state => state.userAppointments)

  const navigate = useNavigate()
  
  const dispatch = useDispatch()

 

  useEffect(()=>{
    if(Object.keys(userIsLogin).length === 0){
      navigate("/home")
    }else{
      axios.get(`http://localhost:8080/users/${userIsLogin.id}`)
      .then(res =>{
        const {appointments} = res.data
        dispatch(loadingTurns(appointments))
      })
      .catch(err => alert(`Error al cargar los appointments ${err}`))
    }
  },[]) 

  return (
    <>
      <h1 className={styles.title}>MIS TURNOS</h1>
      <p className={styles.horario}>El Horario de atención al cliente es de 8:00 a 18:00, porfavor tenerlo en cuenta a la hora de reservar un turno</p>
      {!turnList?.length ? (
        <NoHayTurnos />
      ) : (
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                <td className={styles.turnsHeader}>Date</td>
                <td className={styles.turnsHeader}>Time</td>
                <td className={styles.turnsHeader}>Status</td>
                <td className={styles.turnsHeader}>Description</td>
              </tr>
            </thead>
            <tbody>
              {
                turnList?.map((turn) => {
                  return (
                    <Turn
                      key={turn.id}
                      id={turn.id}
                      date={turn.date}
                      time={turn.time}
                      status={turn.status}
                      description={turn.description}
                    />
                  );
                })
              }
            </tbody>
          </table>
        </>  
      )}
    </>
    
  );
};
export default MisTurnos;
