import React, {useRef, useEffect, useState} from "react";

const ToDos = () => {
    const [newTasks,setNewTasks] = useState([])
    const [userInput,setUserInput] = useState("")
    const [updatedTasks, setUpdatedTasks] = useState([])
    const addTasks = (newTask) => {
        var updatedTasks = [...newTasks]
        updatedTasks.push(newTask)
        setNewTasks(updatedTasks)
    }
    const deleteTask = (index) => {
        var newUpdated = newTasks.filter((element, ind)=>{
            if (ind != index){
                setNewTasks(newUpdated);
                return(
                    <div className="row justify-content-center align-items-center">
                        <div key={ind} className="taskDiv d-flex justify-content-between align-items-center">
                            <p className="toDoTask">{element}</p>
                            <i className="fas fa-trash deleteIcon" onClick={()=>{deleteTask()}}></i>
                        </div>
                    </div>
                )
            }
    })}
    return (
        <div className="mt-5 entireToDoList row justify-content-center align-items-center">
            <div className="taskDiv align-items-center">
                <input type="text" id="inputTodo" value={userInput} placeholder="What needs to be done?" 
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