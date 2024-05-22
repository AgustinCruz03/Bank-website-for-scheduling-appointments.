/* eslint-disable react/prop-types */
import ButtonCancel from "../ButtonCancel/ButtonCancel";
import styles from "./Turn.module.css"

const Turn = ({date, time, status,description, id }) => {
    const statusClass =
    status === "active" ? styles.active : status === "cancelled" ? styles.cancelled : "";

    return (
        <tr className={styles.containerCell}>
            <td className={styles.td}>{date}</td>
            <td className={styles.td}>{time}</td>
            <td className={`${styles.td} `}><span className={`${statusClass}`}>{status}</span></td>
            <td className={styles.td}>{description}</td>
            <td><ButtonCancel id={id} status={status}/></td>
        </tr>
    )
};

export default Turn;
