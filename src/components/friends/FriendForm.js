import React, { useContext, useRef } from "react"
import { FriendContext } from "./FriendProvider"
import "./Friends.css"

export default props => {
    const { addFriend } = useContext(FriendContext)
    const friendCheck = useRef("")
 

    const constructNewFriend = () => {
            addFriend({
                check: friendCheck.current.value,
                

            })
        }
    

    return (
        <form className="friendForm">
            <h2 className="friendForm__title">New Friend</h2>
            <div className="form-group">
                <label htmlFor="friendCheck">Check</label>
                <input
                    type="text"
                    id="friendCheck"
                    ref={friendCheck}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Check"
                />
            </div>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewFriend()
                    }
                }
                className="btn btn-primary">
                Save Friend
            </button>
        </form>
    )
}