import React, { useContext, useRef } from "react"
import { useState, useEffect } from "react"
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
