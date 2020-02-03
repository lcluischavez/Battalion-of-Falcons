import React, { useContext } from "react"
import { MessageContext } from "./MessageProvider"
import Message from "./Message"
import "./Messages.css"

export default (props) => {

    const { messages } = useContext(MessageContext)
    
console.log(messages)
    return (
        <div className="messages">
            <h1>Messages</h1>
            <button onClick={() => props.history.push("/messages/create")}>
                Add message
            </button>
            <article className="messageList">
                {
                    messages.map(mes => <Message key={mes} message={mes} {...props} />)
                }
            </article>
        </div>
    )    
}
