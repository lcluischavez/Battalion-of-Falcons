import React, { useContext } from "react"
import { EventContext } from "./EventProvider"
import "./Events.css"

export default ({ event, match, history }) => {
    const { events, deleteEvent } = useContext(EventContext)

    return (
    <section className="event">
        <h3 className="event__name">{event.name}</h3>
        <div className="event__date">{event.date}</div>
        <div className="event__location">{event.location}</div>
         <button className="btn--delete"
                onClick={() => {
                deleteEvent(event)
                    .then(() => {
                        history.push("/")
                     })
                    }} >Delete
            </button>
    </section>
)}
