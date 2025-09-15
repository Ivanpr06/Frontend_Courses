import React, { useState } from "react"
import style from './ColorPicker.module.css'

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event) {
        setColor(event.target.value)
    }

    return (
        <div className={style.colorPickerContainer}>
            <h1>Color Picker</h1>
            <div className={style.colorDisplay} style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handleColorChange}></input>
        </div>
    )
}

export default ColorPicker