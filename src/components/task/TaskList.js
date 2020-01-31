import React, { useContext } from "react"
import { TaskContext } from "./TaskProvider"
import Task from "./Task"
import "./Tasks.css"

export default (props) => {

    const { tasks } = useContext(TaskContext)
    const userTasks = tasks.filter(task => task.userId === parseInt(localStorage.getItem("currentUser")))
    const doneTask = userTasks.filter(task => task.done === true)
    const openTask = userTasks.filter(task => task.done === false)

    console.log(userTasks)

    return (
        <div className="doneTasks">
            <h2>Done</h2>
            <article className="taskList">
                {
                    doneTask.map(tas => <Task key={tas.id} task={tas} {...props} />)
                }
            </article>
            <h2>Open</h2>
            <article className="taskList">
                {
                    openTask.map(tas => <Task key={tas.id} task={tas} {...props} />)
                }
            </article>
        </div>
    )
}