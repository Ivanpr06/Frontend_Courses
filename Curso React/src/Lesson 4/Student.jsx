import style from './Student.module.css'
import prototype from 'prop-types'

function Student(props){
    return(
        <div className={style.student}>
            <p>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Student: {props.isStudent ? "Yes" : "No"}</p>
            </p>
        </div>
    )
}

Student.prototype = {
    name: prototype.string,
    age: prototype.number,
    isStudent: prototype.bool,
}

export default Student