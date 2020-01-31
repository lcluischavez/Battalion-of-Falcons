import React from "react"
import { Route } from "react-router-dom"


import MessageList from "./message/MessageList"
import MessageDetails from "./message/MessageDetails"
import { MessageProvider } from "./message/MessageProvider"
import MessageForm from "./message/MessageForm"
import { FriendProvider } from "./friends/FriendProvider"
import FriendForm from "./friends/FriendForm"
import FriendDetails from "./friends/FriendDetails"
import FriendList from "./friends/FriendList"



export default (props) => {
    return (
        <>
            
           
            <MessageProvider>
                <Route exact path="/messages" render={
                    props => <MessageList {...props} />
                } />
                <Route exact path="/messages/create">
                    <MessageForm />
                </Route>
                <Route path="/messages/:messageId(\d+)" render={
                    props => <MessageDetails {...props} />
                } />
            </MessageProvider>

            <FriendProvider>
                <Route exact path="/friends" render={
                    props => <FriendList {...props} />
                } />
                <Route exact path="/friends/create">
                    <FriendForm />
                </Route>
                <Route path="/friends/:friendId(\d+)" render={
                    props => <FriendDetails {...props} />
                } />
            </FriendProvider>
        </>
    )
}
