// import React, { useContext } from "react"
// import { TaskContext } from "./TaskProvider"
// import Task from "./Task"
// import "./Tasks.css"

// export default (props) => {
//     const { tasks } = useContext(TaskContext)
//     return (
//         <div className="tasks">
//             <h2>Tasks</h2>
//             <button onClick={() => props.history.push("/tasks/create")}>
//                 Create Task
//             </button>
//             <article className="taskList">
//                 {
//                     tasks.map(tas => <Task key={tas.id} task={tas} />)
//                 }
//             </article>
//         </div>
//     )
// }

import React, { useContext } from "react"
import { TaskContext } from "./TaskProvider"
import Task from "./Task"
import "./Tasks.css"

export default (props) => {
    const { tasks } = useContext(TaskContext)

    return (
        <div className="tasks">
            <h1>Tasks</h1>
            <button onClick={() => props.history.push("/tasks/create")}>
                Add Task
            </button>
            <article className="taskList">
                {tasks.map(task => <Task key={task.id} task={task} />)}
            </article>
        </div>
    )
}
