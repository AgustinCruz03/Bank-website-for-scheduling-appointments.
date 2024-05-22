import styles from "./TextImgHome.module.css"
/* eslint-disable react/prop-types */
const TextImgHome = ({ texto, img }) => {
  return (
    <div className={styles.parTxtImg}>
      <img src={img} alt={`${img}`} className={styles.img}/>
      <p className={styles.txt}>{texto}</p>
    </div>
  );
};

export default TextImgHome;
