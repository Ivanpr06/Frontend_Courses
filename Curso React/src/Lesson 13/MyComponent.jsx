import React, {useState} from "react";

function MyComponent(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");
    
    function handleAddCar(){
        const newCar = {year: carYear, make: carMake, model: carModel};
        setCars(c => [...c, newCar])

        setCarModel(new Date().getFullYear());
        setCarModel("");
        setCarMake("");
    }

    function handleRemoveCar(index){
        setCars(cars.filter((_, i) => i !== index));
    }

    function handleYearChange(event){
        setCarYear(event.target.value);
    }

    function handleMakeChange(event){
        setCarMake(event.target.value);
    }

    function handleModelChange(event){
        setCarModel(event.target.value);
    }

    return(
        <div>
            <h2>List Of Car Objects</h2>
            <ul>
                {cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange}></input><br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make"></input><br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model"></input><br/>
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )

}

export default MyComponent