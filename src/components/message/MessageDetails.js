// import React, { useContext } from "react"
// import { Context } from "../task/TaskProvider"
// import { MessageContext } from "./MessageProvider"
// import "./Messages.css"

// export default (props) => {
//     const { messages } = useContext(MessageContext)
//     const { tasks } = useContext(TaskContext)

//     /*  
//         This line of code will be explained in the next
//         section of the chapter.
//     */
//     const chosenMessageId = parseInt(props.match.params.messageId, 10)

//     const message = messages.find(a => a.id === chosenMessageId) || {}
//     const task = tasks.find(t => t.id === message.taskId) || {}

//     return (
//         <section className="message">
//             <h3 className="message__id">{ message.id }</h3>
//             <div className="message__messages">{ message.messages }</div>
//             <div className="message__task">Task: { task.name }</div>
//         </section>
//     )
// }
