import React, { useState } from "react"
import style from './Counter.module.css'

function Counter() {

    const [num, setNum] = useState(0);

    const decrementNum = () => {
        setNum(num - 1);
    }

    const resetNum = () => {
        setNum(0);
    }

    const incrementNum = () => {
        setNum(num + 1);
    }
    

    return (
        <>
            <p className={style.counterP}>{num}</p>
            <div className={style.countDisplay}>
                <button className={style.counterButton} onClick={decrementNum}>Decrement</button>
                <button className={style.counterButton} onClick={resetNum}>Reset</button>
                <button className={style.counterButton} onClick={incrementNum}>Increment</button>

            </div>
        </>
    )
}

export default Counter