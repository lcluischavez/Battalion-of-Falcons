import React, { useContext, useRef } from "react"
import { useState, useEffect } from "react"
import { MessageContext } from "./MessageProvider"
import "./Messages.css"

export default props => {
    const { addMessage } = useContext(MessageContext)
    const [MessageName, changeMessageNameStateTo] = useState("")
    const name = useRef(null)

    const onUserTypingSomething = e => {
        changeMessageNameStateTo(e.target.value)
    }
    
    const constructNewMessage = () => {
        addMessage({
            messages: name.current.value
        })
        .then(() => {
            changeMessageNameStateTo("")
        })
    }

    return (
        <form className="messageForm">
            <h2 className="messageForm__title">New Message</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="messages">Message name: </label>
                    <input
                        type="text"
                        id="messages"
                        ref={name}
                        value={MessageName}
                        onChange={onUserTypingSomething}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Message name"
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault()
                        constructNewMessage()
                    }
                }
                className="btn btn-primary">
                Save Message
            </button>
        </form>
    )
}









