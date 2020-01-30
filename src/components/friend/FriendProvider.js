import React, { useState, useEffect } from "react"

export const FriendContext = React.createContext()

export const FriendsProvider = (props) => {
    const [friend, setFriends] = useState([])

    const getFriends = () => {
        return fetch("http://localhost:8088/friend")
            .then(res => res.json())
            .then(parsedFriends => {
                setFreinds(parsedFriends)
            })
    }

    const addFriend = friend => {
        return fetch("http://localhost:8088/friend", {
            method: "POST",
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
        console.log("****  EMPLOYEE APPLICATION STATE CHANGED  ****")
        console.log(friends)
    }, [friend])

    return (
        <FriendContext.Provider value={{
            friends, addFriend
        }}>
            {props.children}
        </FriendContext.Provider>
    )
}