import React, { useContext } from "react"
import { TaskContext } from "./TaskProvider"
import "./Tasks.css"

export default ({ task, match, history }) => {
    const { tasks, deleteTask, editTasks } = useContext(TaskContext)
 
    // const handleControlledInputChange = (event) => {
    //     // debugger
    //     /*
    //         When changing a state object or array, always create a new one
    //         and change state instead of modifying current one
    //     */
    //     const newTask = Object.assign({}, task)
    //     newTask[event.target.name] = event.target.value
    //     setTask(newTask)
    // }

    // const setDefaults = () => {
    //     if (editMode) {
    //         const taskId = parseInt(props.match.params.taskId)
    //         const selectedTask = tasks.find(t => t.id === taskId) || {}
    //         setTask(selectedTask)
    //     }
    // }

    // useEffect(() => { 
    //     setDefaults()
    // }, [tasks])

    // const constructNewTask = () => {
    //     const taskId = parseInt(task.id)

    //     if (taskId === undefined) {
    //         window.alert("Error")
    //     } else {
    //         if (editMode) {
    //             editTask({
    //                 "done": true
    //             })
    //                 .then(() => props.history.push("/"))
    //         } else {
    //             addTask({
    //                 "done": false
    //             })
    //                 .then(() => props.history.push("/"))
    //         }
    //     }
    // }

    return (
    <section className="task">
        <h3 className="task__name">{task.name}</h3>
        <div className="task__task">{task.task}</div>
        <div className="task__exCompDate">{task.exCompDate}</div>

<div className="taskDoneCheckBox">
        Done <input type="checkbox" onClick={evt => {
                    evt.preventDefault()
                    editTasks(true, task.id)
                }}></input>
</div>

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

// onClick={}