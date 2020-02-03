import React, { useState, useEffect } from "react"

export const MessageContext = React.createContext()

export const MessageProvider = (props) => {
    const [messages, changeMessageState] = useState([])

    const getMessages = () => {
        return fetch("http://localhost:8088/messages")
            .then(res => res.json())
            .then(changeMessageState)
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

    const deleteMessage = message => {
        return fetch(`http://localhost:8088/messages/${message.id}`, {
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
        console.log(messages)
        console.log("messages app state changed")
        // if (checkedMessages.length == messages.length){
        //     console.log("time to get messages")
        // }
    }, [messages])

    return (
        <MessageContext.Provider value={{
            messages, addMessage, deleteMessage, updateMessage
        }}>
            {props.children}
        </MessageContext.Provider>
    )
}
