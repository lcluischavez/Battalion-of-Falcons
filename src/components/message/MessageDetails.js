import React, { useContext } from "react"
// import { LocationContext } from "../location/LocationProvider"
import { MessageContext } from "./MessageProvider"
import "./Messages.css"

export default (props) => {
    const { messages } = useContext(MessageContext)
    // const { locations } = useContext(LocationContext)

    /*
        This line of code will be explained in the next
        section of the chapter.
    */
    const chosenMessageId = parseInt(props.match.params.messageId, 10)

    const message = messages.find(a => a.id === chosenMessageId) || {}
    // const location = locations.find(l => l.id === message.locationId) || {}

    return (
        <section className="message">
            <h3 className="message__id">{ message.id }</h3>
            <div className="message__messages">{ message.messages }</div>
            {/* <div className="message__location">Location: { location.name }</div> */}
        </section>
    )
}
