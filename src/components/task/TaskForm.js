import React, { useContext, useRef } from "react"
import { TaskContext } from "./TaskProvider"
import "./Tasks.css"

export default props => {
    const { addTask } = useContext(TaskContext)
    const taskName = useRef("")
    const taskTask = useRef("")
    const taskExCompDate = useRef("")

    const constructNewTask = () => {
            addTask({
                name: taskName.current.value,
                task: taskTask.current.value,
                exCompDate: taskExCompDate.current.value,                

            })
        }
    

    return (
        <form className="taskForm">
            <h2 className="taskForm__title">New Task</h2>
            <div className="form-group">
                <label htmlFor="taskName">Task name</label>
                <input
                    type="text"
                    id="taskName"
                    ref={taskName}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Task name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="taskTask">Task</label>
                <input
                    type="text"
                    id="taskTask"
                    ref={taskTask}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Task"
                />
            </div>
            <div className="form-group">
                <label htmlFor="taskExCompDate">Exp. Completion Date</label>
                <input
                    type="text"
                    id="taskExCompDate"
                    ref={taskExCompDate}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Expected Completion Date"
                />
            </div>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewTask()
                    }
                }
                className="btn btn-primary">
                Save Task
            </button>
        </form>
    )
}

