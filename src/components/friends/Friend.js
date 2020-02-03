import React from "react"
import "./Friends.css"

export default ({ friend }) => (
    <section className="friend">
        <div className="freind__profilePicture"></div>
        <div className="friend__firstName">{friend.firstName}</div>
        <div className="friend__firstName">{friend.lastName}</div>
    </section>
)

