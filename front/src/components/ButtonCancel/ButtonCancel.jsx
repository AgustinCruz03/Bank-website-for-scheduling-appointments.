import { useEffect, useState } from "react";
import styles from "./ButtonCancel.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cancelTurn } from "../../redux/reducer";
import AreYouSecure from "../AreYouSecure/AreYouSecure";

// eslint-disable-next-line react/prop-types
const ButtonCancel = ({ id , status}) => {
  const dispatch = useDispatch();
  const [cancel, setCancel] = useState(false);
  const [modal, setModal] = useState(false)

  useEffect(() => {
    if (cancel) {
      axios
        .put(`http://localhost:8080/appointment/cancel/${id}`)
        .then((res) => {
          // console.log(res.data.appointmentData)
          dispatch(cancelTurn(res.data.appointmentData));
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cancel]);

   const twoClass = status !== "cancelled" ? `${styles.button} ${styles.pointer}`: `${styles.button}`
  return (
    <>
      <button onClick={() => setModal(true)} className={twoClass} disabled={status==="cancelled"}>
        Cancelar Turno
      </button>
      {
        modal && <AreYouSecure setCancel={setCancel} setModal={setModal}/>
      }
    </>
  );
};

export default ButtonCancel;
