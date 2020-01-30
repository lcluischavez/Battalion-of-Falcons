import React, { useState, useEffect } from "react"

export const MessageContext = React.createContext()

export const MessageProvider = (props) => {
    const [theMessages, setMessages] = useState([])

    const getMessages = () => {
        return fetch("http://localhost:8088/messages")
            .then(res => res.json())
            .then(setMessages)
    }

    const addMessage = message => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
            .then(getMessages)
    }

    const releaseMessage = messageId => {
        return fetch(`http://localhost:8088/messages/${messageId}`, {
        method: "DELETE"
    })
        .then(getMessages)
}

    const updateMessage = message => {
        return fetch(`http://localhost:8088/messages/${message.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
        .then(getMessages)
}

    useEffect(() => {
        getMessages()
    }, [])

    useEffect(() => {
        console.log("****  Message APPLICATION STATE CHANGED  ****")
    }, [theMessages])

    return (
        <MessageContext.Provider value={{
            theMessages, addMessage, releaseMessage, updateMessage
        }}>
            {props.children}
        </MessageContext.Provider>
    )
}
