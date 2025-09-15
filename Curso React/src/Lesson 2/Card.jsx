import profileImg from '../assets/profileImg.png'
import style from './Card.module.css'

function Card(){
    return(
        <div className={style.card}>
            <img className={style.cardImage} src={profileImg} alt="Profile Picture"></img>
            <h2 className={style.cardTitle}>Iván Ponti</h2>
            <p className={style.cardText}>DAW student and love hiking</p>
        </div>
    )
}

export default Card