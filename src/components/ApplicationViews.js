import React from "react"
import { Route } from "react-router-dom"

// import MessageList from "./message/MessageList"
// import MessageDetails from "./message/MessageDetails"
import { MessageProvider } from "./message/MessageProvider"
import MessageForm from "./message/MessageForm"

export default (props) => {
    return (
        <>
            <MessageProvider>
                <Route exact path="/messages/create">
                    <MessageForm />
                </Route>
            </MessageProvider>
        </>
    )
}
