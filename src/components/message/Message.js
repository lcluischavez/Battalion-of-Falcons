import React, { useContext } from "react"
import { MessageContext } from "./MessageProvider"
import "./Messages.css"

// import { Link } from "react-router-dom"

export default ({message, match, history}) => {
    const { messages, deleteMessage } = useContext(MessageContext)

    return (
    <section className="message">
         <div className="message__message">{message.message}</div>
         <button className="btn--delete"
                onClick={() => {
                deleteMessage(message)
                    .then(() => {
                        history.push("/")
                     })
                    }} >Delete
            </button>
    </section>
)}
