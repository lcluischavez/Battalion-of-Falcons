// import React, { useContext, useRef } from "react"
// import { MessageContext } from "./MessageProvider"
// import "./Messages.css"
// import { useState } from "react"

// export default props => {
//     const { addMessage } = useContext(MessageContext)
//     const [MessageName, changeMessageNameStateTo] = useState("")
//     const messageMessage = useRef(null)

//     const onUserTypingSomething = e => {
//         changeMessageNameStateTo(e.target.value)
//     }
    

//     const constructNewMessage = () => {
//         addMessage({
//             message: messageMessage.current.value
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
//                     <label htmlFor="messages">Message: </label>
//                     <input
//                         type="text"
//                         id="messages"
//                         ref={messageMessage}
//                         value={messageMessage}
//                         onChange={onUserTypingSomething}
//                         required
//                         autoFocus
//                         className="form-control"
//                         placeholder="Message"
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
    const messageMessage = useRef("")


    const constructNewMessage = () => {
            addMessage({
                message: messageMessage.current.value,                

            })
        }
    

    return (
        <form className="eventForm">
            <h2 className="eventForm__title">New Message</h2>
            <div className="form-group">
                <label htmlFor="messageMessage">Message</label>
                <input
                    type="text"
                    id="messageMessage"
                    ref={messageMessage}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Message"
                />
            </div>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewMessage()
                    }
                }
                className="btn btn-primary">
                Save Message
            </button>
        </form>
    )
}
