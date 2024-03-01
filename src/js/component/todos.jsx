import React, {useRef, useEffect, useState} from "react";

const ToDos = () => {
    const [newTasks,setNewTasks] = useState([])
    const [userInput,setUserInput] = useState("")
    const addTasks = (newTask) => {
        var updatedTasks = [...newTasks]
        updatedTasks.push(newTask)
        setNewTasks(updatedTasks)
    }
    const deleteTask = (index) => {
        var updatedTasks = newTasks.filter((element, ind)=>{
            return ind != index
        })
        setNewTasks(updatedTasks)
    }
    return (
        <div className="mt-5 entireToDoList row justify-content-center align-items-center">
            <div className="taskDiv align-items-center">
                <input type="text" value={userInput} placeholder="What needs to be done?" 
                onChange={(e)=>{setUserInput(e.target.value)}} 
                onKeyUp={(e)=>{if (e.key === "Enter"){addTasks(userInput);setUserInput("")}}} />
            </div>
            {newTasks.map((arrayItem,index)=>{
                return (
                    <div className="row justify-content-center align-items-center">
                        <div key={index} className="taskDiv d-flex justify-content-between align-items-center">
                            <p className="toDoTask">{arrayItem}</p>
                            <i className="fas fa-trash" onClick={()=>{deleteTask()}}></i>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ToDos;