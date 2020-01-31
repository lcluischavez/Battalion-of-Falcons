import React, { useContext, useRef } from "react"
import { EventContext } from "./EventProvider"
import "./Events.css"

export default props => {
    const { addEvent } = useContext(EventContext)
    const eventName = useRef("")
    const eventDate = useRef("")
    const eventLocation = useRef("")

    const constructNewEvent = () => {
            addEvent({
                name: eventName.current.value,
                date: eventDate.current.value,
                location: eventLocation.current.value,                

            })
        }
    

    return (
        <form className="eventForm">
            <h2 className="eventForm__title">New Event</h2>
            <div className="form-group">
                <label htmlFor="eventName">Event name</label>
                <input
                    type="text"
                    id="eventName"
                    ref={eventName}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Event name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="eventDate">Date</label>
                <input
                    type="text"
                    id="eventDate"
                    ref={eventDate}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Date"
                />
            </div>
            <div className="form-group">
                <label htmlFor="eventLocation">Location</label>
                <input
                    type="text"
                    id="eventLocation"
                    ref={eventLocation}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Location"
                />
            </div>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewEvent()
                    }
                }
                className="btn btn-primary">
                Save Event
            </button>
        </form>
    )
}