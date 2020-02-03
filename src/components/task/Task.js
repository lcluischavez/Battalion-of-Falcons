import React from "react"
import "./Tasks.css"


export default ({ task }) => (
    <section className="task">
        <h3 className="task__name">{task.name}</h3>
        <div className="task__task">{task.task}</div>
        <div className="task__exCompDate">{task.exCompDate}</div>

        <button className="taskButton">Done</button>

    </section>
)

// onClick={}