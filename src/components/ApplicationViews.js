import React from "react"
import { Route } from "react-router-dom"

import { MessageProvider } from "./message/MessageProvider"
import MessageList from "./message/MessageList"
// import MessageDetails from "./message/MessageDetails"
import MessageForm from "./message/MessageForm"
import Messages from "./message/Messages.css"

export default (props) => {
    return (
        <>
          <MessageProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route
                    exact
                    path="/messages"
                    render={props => <MessageList {...props} />}
                />
                <Route exact path="/messages/create">
                    <MessageForm />
                </Route>
            </MessageProvider>
        </>
    )
}
