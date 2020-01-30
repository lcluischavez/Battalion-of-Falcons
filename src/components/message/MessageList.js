import React, { useContext } from "react"
import { MessageContext } from "./MessageProvider"
import Message from "./Message"
import "./Messages.css"

export default (props) => {
    const { messages } = useContext(MessageContext)

    return (
        <>
            <h1>Messages</h1>

            <button onClick={() => props.history.push("/messages/create")}>
                Make Reservation
            </button>
            <div className="messages">
                {
                    messages.map(message => {
                        return <Message key={message.id} animal={message} />
                    })
                }
            </div>
        </>
    )
}
