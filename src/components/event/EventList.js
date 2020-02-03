import React, { useContext } from "react"
import { EventContext } from "./EventProvider"
import Event from "./Event"
import "./Events.css"

export default (props) => {
    const { events } = useContext(EventContext)

    return (
        <div className="events" className="leftSection">
            <h1>Events</h1>
            <button onClick={() => props.history.push("/events/create")}>
                Add Event
            </button>
            <article className="eventList">
                {events.map(event => <Event key={event.id} event={event} {...props} />)}
            </article>
        </div>
    )
}