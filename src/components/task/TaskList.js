import React, { useContext } from "react"
import { TaskContext } from "./TaskProvider"
import Task from "./Task"
import "./Tasks.css"

export default (props) => {
    const { tasks } = useContext(TaskContext)
    const userTasks = tasks.filter(task => {

        return task.userId === parseInt(localStorage.getItem("currentUser"))
    })
    const doneTask = userTasks.filter(task => task.done === true)
    const openTask = userTasks.filter(task => task.done === false)

    return (
        
        <div className="tasks">
            <h1>Tasks</h1>

            <button onClick={() => props.history.push("/tasks/create")}>
                Add Task
            </button>
            
            <h2>Open</h2>
            <article className="taskList">
                {
                    openTask.map(tas => <Task key={tas.id} task={tas} {...props} />)
                }
            </article>

            <h2>Done</h2>
            <article className="taskList">
                {
                    doneTask.map(tas => <Task key={tas.id} task={tas} {...props} />)
                }
            </article>
            <article className="taskList">
                {tasks.map(task => <Task key={task.id} task={task} {...props } />)}
            </article>

        </div>
        
    )
}
