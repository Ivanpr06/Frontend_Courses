import React, { useState } from "react";
import sytle from './ToDoList.module.css'

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat Breakfast", "Take A Shower", "Training"]);
    const [newTask, setNewTask] = useState("");

    function handleInputCharge(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }else{
            alert("Añada una tarea")
        }

    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <>
            <div className={sytle.ToDoList}>
                <h1>To-Do-List</h1>

                <div>
                    <input type="text" placeholder="Enter a task ..." value={newTask} onChange={handleInputCharge}></input>
                    <button className={sytle.addButton} onClick={addTask}>Add</button>
                </div>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className={sytle.text}>{task}</span>
                        <button className={sytle.deleteButton} onClick={() => deleteTask(index)}>🗑️</button>
                        <button className={sytle.moveButton} onClick={() => moveTaskUp(index)}>👆</button>
                        <button className={sytle.moveButton} onClick={() => moveTaskDown(index)}>👇</button>
                    </li>)}
            </ol>
        </>
    )
}

export default ToDoList