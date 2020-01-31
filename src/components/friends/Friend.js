import React from "react"
import "./Friends.css"

export default ({ friend }) => (
    <section className="friend">
        <div className="friend__check">{friend.check}</div>
    </section>
)

