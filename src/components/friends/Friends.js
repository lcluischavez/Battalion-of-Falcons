import React from "react"
import "./Friends.css"
import { Link } from "react-router-dom"


export default ({ friend }) => (
    <section className="friend">
        <h3 className="friend__name">
            <Link to={`/friend/${friend.name}`}>
            
            </Link>
        </h3>
    
    </section>
)