import React from "react"
import "./Friends.css"
import { FriendContext } from "./FriendProvider"
import { useState } from "react"
import { UserContext } from "../user/UserProvider"

// export default ({ friend }) => (
//     <section className="friend">
//         <h3 className="friend__name">{friend.name}</h3>

//         <ul>
//             {
//                 friend.map(e => <li key={e.id}>{e.name}</li>)
//             }
//         </ul>
//     </section>
// )

const { friend, addFriend } = useContext(FriendContext)
const { user } = useContext(UserContext)
const [friendName, changeFriendNameState] = useState("")
const name = useRef(null)
const freindsRelationships = friend.filter(friend => friend.userId === parseInt(localStorage.getItem("currentUser")))
// const usersFreinds = users.filter(freind => freind.freindId === users.id)

    const matchingUsers = () => freindsRelationships.map(user => {
        // Find this freinds matching user object
        const matchingFreind = users.find(
            (user) => {
                return freinds.freindId === users.userId
            }
        )

        // Pass the matching location to Employee component
        return console.log(matchingFreind)
    })

