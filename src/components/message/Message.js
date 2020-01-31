// import React from "react"
// import "./Messages.css"
// import { Link } from "react-router-dom"

// export default ({ message }) => (
//     <section className="message">
//         <h3 className="message__name">
//             <Link to={`/messages/${message.id}`}>
//                 { message.messages }
//             </Link>
//         </h3>
//         <div className="message__messages">{ message.messages }</div>
//     </section>
// )



import React from "react"
import "./Messages.css"

export default ({ message }) => (
    <section className="message">
        <h3 className="message__name">{message.mesages}</h3>
    </section>
)
