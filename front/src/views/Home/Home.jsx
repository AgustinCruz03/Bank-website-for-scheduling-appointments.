import styles from "./Home.module.css"
import textImgHomeData from "../../helpers/textImgHomeData";
import { useState } from "react";
import TextImgHome from "../../components/TextImgHome/TextImgHome";

const Home = () => {
    const [txtImgList, setTxtImgList] = useState(textImgHomeData)
    console.log(setTxtImgList);
    return (
        <>
            <h1 className={styles.home}>HOME</h1>
            {
                txtImgList.map((parTextoImagen,index)=> {
                    return <TextImgHome key={index} texto={parTextoImagen.texto} img={parTextoImagen.img}/>
                })
            }
        </>
    )
}
export default Home;