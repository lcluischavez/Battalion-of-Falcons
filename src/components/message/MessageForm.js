import React, { useContext, useRef } from "react"
import { MessageContext } from "./messageProvider"
import "./messages.css"
export default props => {
    const { addMessage } = useContext(MessageContext)
    const messageMessages = useRef("");
    const constructNewMessage = () => {
            addMessage({
                messages: messageMessages.current.value,
            })
        }
    return (
        <form className="messageForm">
            <h2 className="messageForm__title">New message</h2>
            <div className="form-group">
                    <label htmlFor="messageName">message messages </label>
                    <input
                        type="text"
                        id="messageMessages"
                        ref={messageMessages}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="message Messages"
                    />
            </div>
            <div className="form-group">
                <label htmlFor="messages">Messages </label>
                <input
                        type="text"
                        id="messages"
                        ref={messageMessages}
                        className="form-control"
                        placeholder="Message"
                />
            </div>
    
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault()
                        constructNewMessage()
                    }
                }
                className="btn btn-primary">
                Save message
            </button>
        </form>
    )
}
