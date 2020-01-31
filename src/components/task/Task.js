import React, { useContext } from "react"
import { TaskContext } from "./TaskProvider"
import "./Tasks.css"


export default ({ task, match, history }) => {
    const { tasks, deleteTask } = useContext(TaskContext)
 
    return (
    <section className="task">
        <h3 className="task__name">{task.name}</h3>
        <div className="task__task">{task.task}</div>
        <div className="task__exCompDate">{task.exCompDate}</div>
         <button className="btn--delete"
                onClick={() => {
                deleteTask(task)
                    .then(() => {
                        history.push("/")
                     })
                    }} >Delete
            </button>
    </section>
)}

