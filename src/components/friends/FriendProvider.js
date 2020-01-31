import React, { useState, useEffect } from "react"



export const FriendContext = React.createContext()

export const FriendProvider = (props) => {
    const [friend, changeFriendState] = useState([])

    const getFriends = () => {
        return fetch("http://localhost:8088/friends")
            .then(res => res.json())
            .then(changeFriendState)
    }

    const addFriend = friend => {
        return fetch("http://localhost:8088/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(friend)
        })
            .then(getFriends)
    }

    const deleteFriend = friend => {
        return fetch(`http://localhost:8088/friends/${friend.id}`, {
            method: "DELETE"
        })
        .then(getFriends)
    }

    const updateFriend = friend => {
        return fetch(`http://localhost:8088/friends/${friend.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(friend)
        })
            .then(getFriends)
    }

    useEffect(() => {
        getFriends()
    }, [])

    useEffect(() => {
    }, [friend])

    return (
        <FriendContext.Provider value={{
            friend, addFriend, deleteFriend, updateFriend
        }}>
            {props.children}
        </FriendContext.Provider>
    )
}