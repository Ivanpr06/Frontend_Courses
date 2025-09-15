import ComponentB from "./ComponentB";
import React, { useState, createContext } from "react";

export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Bro")

    return (
        <>
            <h2>ComponentA</h2>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user}></ComponentB>
            </UserContext.Provider>
        </>
    )
}

export default ComponentA