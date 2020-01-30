import React, { useContext, useState, useEffect } from "react"
import { FriendContext } from "./FriendProvider"


export default props => {

    const { deleteFriend, Friends } = useContext(FriendContext)
    const [friend, setFriend] = useState({})

    const editMode = props.match.params.hasOwnProperty("friendId")

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newFriend = Object.assign({}, friend)
        newFriend[event.target.name] = event.target.value
        setFriend(newFriend)
    }

    const setDefaults = () => {
        if (editMode) {
            const FriendId = parseInt(props.match.params.animalId)
            const selectedFriend = theFriends.find(a => a.id === friendId) || {}
            setFriend(selectedFriend)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [theFriends])

    return (
        <form className="FriendForm">
            <h2 className="FriendForm__title">{editMode ? "Update Friend" : "Admit Friend"}</h2>
        < fieldset >
        <div className="form-group">
            <label htmlFor="name">Friend name: </label>
            <input type="text" name="name" required className="form-control"
                proptype="varchar"
                placeholder="Friend name"
                defaultValue={friend.name}
                onChange={handleControlledInputChange}
            />
        </div>
            </fieldset >

       
        <button type="submit"
            onClick={evt => {
                evt.preventDefault()
                constructNewFriend()
            }}
            className="btn btn-primary">
            {editMode ? "Save Updates" : "New upgrade"}
        </button>
        </form >
    )
}