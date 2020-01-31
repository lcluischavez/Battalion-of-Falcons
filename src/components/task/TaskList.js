import React, { useContext } from "react"
import { TaskContext } from "./TaskProvider"
import Task from "./Task"
import "./Tasks.css"

export default (props) => {
    const { tasks } = useContext(TaskContext)
    return (
        <div className="tasks">
            <article className="taskList">
                {
                    tasks.map(tas => <Task key={tas.id} task={tas} />)
                }
            </article>
        </div>
    )
}