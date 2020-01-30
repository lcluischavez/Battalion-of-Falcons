import React from "react"
import { Route } from "react-router-dom"
import { FriendProvider } from "./friend/FriendProvider"
import FriendList from "./friend/FriendList"
import FriendForm from "./fried/FriendForm"

export default (props) => {
    return (
        <>
            <FriendProvider>
                    <Route exact path="/">
                        <FriendList />
                    </Route>
                    <Route exact path="/friends/create">
                    props => <FriendForm {...props} />
                        <FriendForm />
                    </Route>
               
            </FriendProvider>
        </>
    )
}
