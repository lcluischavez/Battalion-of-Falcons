import React from "react"
import "./Messages.css"
//import { Link } from "react-router-dom"

export default ({ message }) => (
    <section className="message">
         <div className="message__message">{message.message}</div>
         <div className="message__sender">{message.senderName}</div>
    </section>
)
