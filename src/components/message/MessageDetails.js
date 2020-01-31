import React, { useContext } from "react"
import { Context } from "../task/TaskProvider"
import { MessageContext } from "./MessageProvider"
import "./Messages.css"

export default (props) => {
    const { messages, deleteMessage } = useContext(MessageContext)

    /*  
        This line of code will be explained in the next
        section of the chapter.
    */
    const chosenMessageId = parseInt(props.match.params.messageId, 10)

    const message = messages.find(m => m.id === chosenMessageId) || {}

    return (
        <section className="message">
            <h3 className="message__id">{ message.id }</h3>
            <div className="message__messages">{ message.messages }</div>

            <button className="btn--delete"
                onClick={() => {
                deleteMessage(chosenMessageId)
                    .then(() => {
                        props.history.push("/messages")
                     })
                    }} >Delete
            </button>
        </section>
    )
}
