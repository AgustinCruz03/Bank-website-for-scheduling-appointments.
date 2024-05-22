/* eslint-disable react/prop-types */
import styles from "./AreYouSecure.module.css"

const AreYouSecure = ({setCancel, setModal}) => {

    const handleCancel = () => {
        setCancel(true)
        setModal(false)
    }

    const handleVolver = () => {
        setModal(false)
    }
    return (
        <div className={styles.modal}>
            <p>¿Seguro que quieres Cancelar el turno?</p> 
            <div>
                <button className={styles.cancelar} onClick={handleCancel}>Cancelar Turno</button>
                <button className={styles.volver} onClick={handleVolver}>No, me arrepentí</button>
            </div>
        </div>
    )
}

export default AreYouSecure