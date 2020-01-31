import React, { useContext, useRef } from "react"
import { FriendContext } from "./FriendProvider"
import "./Friends.css"
import { useState } from "react"



export default props => {
    const { addFriend } = useContext(FriendContext)
    const [friendName, changeFriendNameState] = useState("")
    const name = useRef(null)

    const onUserTypingSomething = e => {
        changeFriendNameState(e.target.value)
    }
    

    const constructNewFriend = () => {
        addFriend({
            friend: name.current.value
        })
        .then(() => {
            changeFriendNameState("")
        })
    }

    return (
        <form className="friendForm">
            <h2 className="friendForm__title">New Friend</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="friend">Friend name: </label>
                    <input
                        type="text"
                        id="friend"
                        ref={name}
                        value={friendName}
                        onChange={onUserTypingSomething}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Friend name"
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault()
                        constructNewFriend()
                    }
                }
                className="btn btn-primary">
                Save Friend
            </button>
        </form>
    )
}