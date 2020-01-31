import React from "react"
import "./Messages.css"
// import { Link } from "react-router-dom"

export default ({ message, deleteMessage }) => (     

    <section className="message">
         <div className="message__message">{message.message}</div>
         {/* <button className="btn--delete"
                onClick={() => {
                deleteMessage(chosenMessageId)
                    .then(() => {
                        props.history.push("/messages")
                     })
                    }} >Delete
            </button> */}
    </section>
)
