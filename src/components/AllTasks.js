import "./AllTasks.css";
import data from "../data"
import { useState } from "react"

const AllTasks = () => {
    const [myTask, setMyTask] = useState(data);

    const taskHandler = (id) => {
        const filteredTasks = myTask.filter( (oneTask) => {
            return oneTask.id !== id
        })

        setMyTask(filteredTasks)
    }

    const allDeleteHandler = () => {
        setMyTask([])
    }

    const submitHandler = () =>  {
        const taskInput = document.getElementById("taskInput")
        let taskValue = taskInput.value
        const length = myTask.length
        const newVarLength = length + 1
        const newVar = {id: newVarLength, name: taskValue}
        const insertedTasks = myTask.concat(newVar)
        
        setMyTask(insertedTasks)
        console.log(taskValue);
        console.log(insertedTasks);

        myTask.map( (oneTask) => {
            const {id, name} = oneTask;        
                                
            return <div className="one-task" key={id}>
                <h4>{name}</h4>
                <button type="button" onClick={() => {taskHandler(id)}}>Vymazat</button>
            </div>
        })

        document.getElementById("taskInput").value = ""
    }
           
    return (
        <div>
            {/* jsme v JSX - proto nemuzeme hned zacit psat JS -> musime ho uzavrit do chlupatych zavorek */}
            {
                myTask.map( (oneTask) => {
                    const {id, name} = oneTask;        
                                        
                    return <div className="one-task" key={id}>
                        <h4>{name}</h4>
                        <button type="button" onClick={() => {taskHandler(id)}}>Vymazat</button>
                    </div>
                })
            }
            <p></p>

            <div className="new-task">
                <input type="text" size="50" id="taskInput" />
                <button type="button" id="addTaskButton" onClick={submitHandler}>Přidej úkol</button>   
            </div>
            <p></p>
            <button type="button" className="main-button" onClick={allDeleteHandler}>Vymazat vše</button>
        </div>

    )
}

export default AllTasks;




  
