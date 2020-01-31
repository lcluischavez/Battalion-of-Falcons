// import React, { useContext, useRef } from "react"
// import { MessageContext } from "./MessageProvider"
// import "./Messages.css"
// import { useState } from "react"

// export default props => {
//     const { addMessage } = useContext(MessageContext)
//     const [MessageName, changeMessageNameStateTo] = useState("")
//     const name = useRef(null)

//     const onUserTypingSomething = e => {
//         changeMessageNameStateTo(e.target.value)
//     }
    
//     const constructNewMessage = () => {
//         addMessage({
//             messages: name.current.value
//         })
//         .then(() => {
//             changeMessageNameStateTo("")
//         })
//     }

//     return (
//         <form className="messageForm">
//             <h2 className="messageForm__title">New Message</h2>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="messages">Message name: </label>
//                     <input
//                         type="text"
//                         id="messages"
//                         ref={name}
//                         value={MessageName}
//                         onChange={onUserTypingSomething}
//                         required
//                         autoFocus
//                         className="form-control"
//                         placeholder="Message name"
//                     />
//                 </div>
//             </fieldset>
//             <button type="submit"
//                 onClick={
//                     evt => {
//                         evt.preventDefault()
//                         constructNewMessage()
//                     }
//                 }
//                 className="btn btn-primary">
//                 Save Message
//             </button>
//         </form>
//     )
// }









import React, { useContext, useRef } from "react"
import { MessageContext } from "./MessageProvider"
import "./Messages.css"
export default props => {
    const { addMessage } = useContext(MessageContext)
    const messageName = useRef("");
    const constructNewMessage = () => {
            addMessage({
                name: messageName.current.value,
            })
        }
    return (
        <form className="messageForm">
            <h2 className="messageForm__title">New Message</h2>
            <div className="form-group">
                    <label htmlFor="messageName">Message name </label>
                    <input
                        type="text"
                        id="messageName"
                        ref={messageName}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Message name"
                    />
            </div>
            {/* <div className="form-group">
                <label htmlFor="taskTask">Task </label>
                <input
                        type="text"
                        id="taskTask"
                        ref={taskTask}
                        className="form-control"
                        placeholder="Task"
                />
            </div> */}
            {/* <div className="form-group">
                <label htmlFor="taskExCompDate">Expected Completion Date </label>
                <input
                        type="text"
                        id="taskExCompDate"
                        ref={taskExCompDate}
                        className="form-control"
                        placeholder="Exp. Completion Date"
                />
            </div> */}
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault()
                        constructNewMessage ()
                    }
                }
                className="btn btn-primary">
                Save Message
            </button>
        </form>
    )
}
