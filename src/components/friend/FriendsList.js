import React, { useContext } from "react"
import { FriendContext } from "./FriendProvider"
import Friend from "./Friends"
import "./Friend.css"

export default () => {
    // const Friends = useFriends()
    const { theFriends } = useContext(FriendContext)

    return (
        <div className="Friends">
            {theFriends.map(friend => {


                return (
                    <Friend
                        key={Friend.id}
                        friend={friend}

                    />
                )
            })
            }
        </div>
    );
}