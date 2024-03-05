import React, {useRef, useEffect, useState} from "react";

const ToDos = () => {
    const [newerTasks,setNewerTasks] = useState([])
    const [userInput,setUserInput] = useState("")

    useEffect(()=>{
        fetch("https://playground.4geeks.com/apis/fake/todos/user/breilly")
        .then(resp => resp.json())
        .then(data => setNewerTasks(data))
        .then(() => {console.log(newerTasks)})
    }, []);
    const handleFetch = (body) => {
        fetch("https://playground.4geeks.com/apis/fake/todos/user/breilly",{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
    }
    const handleClick = () => {
        let newArray = [...newerTasks, { label: userInput, done: false }];
        setNewerTasks(newArray)
        handleFetch(newArray)
    }
    const checkTrue = (arrayItem , ind) => {
        let checkTrueArray = newerTasks.map((item , index)=>{
            if (arrayItem.id == item.id){
                return { label: item.label, id: item.id, done: !item.done }
            } else {
                return item
            }
        })
        setNewerTasks(checkTrueArray)
        handleFetch(checkTrueArray)
    }
    const deleteTask = (index) => {
        var newUpdated = newerTasks.filter((element, ind)=>{
            return ind != index
    });
    setNewerTasks(newUpdated);
    handleFetch(newUpdated)}

    const lengthFunc = () => {
        return newerTasks.filter(elm => !elm.done).length;
    }

// Easier and more compact way of doing this would be the filter() way shown right above.
//    const countTasks = () => {
//        var count = 0
//        for(let i = 0; i < newerTasks.length; i++){
//            if (newerTasks[i].done == false) {
//               count += 1
//           }
//        }
//        return count;
//    }
//    var counter = countTasks()
    return (
        <div className="mt-5 entireToDoList row justify-content-center align-items-center">
            <div className="taskDiv align-items-center">
                <input type="text" id="inputTodo" value={userInput} placeholder="What needs to be done?" 
                onChange={(e)=>{setUserInput(e.target.value)}} 
                onKeyUp={(e)=>{if (e.key === "Enter"){handleClick();setUserInput("")}}} />
            </div>
            {newerTasks.map((arrayItem,index)=>{
                return (
                    <div key={index} className="row justify-content-center align-items-center">
                        <div className="taskDiv d-flex align-items-center">
                            <p className="me-auto toDoTask">{arrayItem.label}</p>
                                <div className="form-check form-switch align-items-center d-flex">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=>{checkTrue(arrayItem, index)}} />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                                </div>
                            <i className="p-2 fas fa-trash" onClick={()=>{deleteTask(index)}}></i>
                        </div>
                    </div>
                )
            })}
            <footer className="d-flex align-items-center footerText">{lengthFunc()} items left.</footer>
        </div>
    )
}

export default ToDos;