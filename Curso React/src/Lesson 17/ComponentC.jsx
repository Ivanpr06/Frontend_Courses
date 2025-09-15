import React,{useContext} from "react"
import { UserContext } from "./ComponentA"
import ComponentD from "./ComponentD";

function ComponentC() {

    const user = useContext(UserContext);

    return (
        <>
            <h1>ComponentC</h1>
            <h3>{`Hello again ${user}`}</h3>
            <ComponentD></ComponentD>
        </>
    )
}

export default ComponentC