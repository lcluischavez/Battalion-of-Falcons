import React, { useContext } from "react"
import { FriendContext } from "./FriendProvider"
import "./Friend.css"

export default (props) => {
    const { Friends } = useContext(FriendContext)

    /*
        This line of code will be explained in the next
        section of the chapter.
    */
    const chosenFriendId = parseInt(props.match.params.friendId, 10)

    const friend = Friends.find(a => a.id === chosenFriendId) || {}


    return (
        <section className="friend">
            <h3 className="friend__name">{friend.name}</h3>

            <button onClick={
                () => {
                    deleteFriend(friend)
                        .then(() => {
                            props.history.push("/friends")
                        })
                }
            }>
                Delete Button
            </button>

        </section>
    )

}
