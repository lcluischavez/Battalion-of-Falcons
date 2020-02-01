import React, { useContext } from "react"
import { FriendContext } from "./FriendProvider"
import Friend from "./Friend"
import "./Friends.css"

export default (props) => {
    const { friends } = useContext(FriendContext)

    return (
        <div className="friends">
            <h1>Friends</h1>
            <button onClick={() => props.history.push("/friends/create")}>
                Add Friend
            </button>
            <article className="friendList">
                {friends.map(friend => <Friend key={friend.id} friend={friend} {...props } />)}
            </article>
        </div>
    )
}