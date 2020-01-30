import React from "react"
import { Link } from "react-router-dom"
import "./Navbars.css"

export default (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">NSS Nutshell</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/messages/create">Add Message</Link>
            </li>
            {/* { 
                localStorage.getItem("Nutshell2_customer")
                    ? <li className="navbar__item">
                        <Link className="navbar__link"
                            to=""
                            onClick={e => {
                                e.preventDefault()
                                localStorage.removeItem("Nutshell2_customer")
                                props.history.push("/")
                            }}
                        >Logout</Link>
                    </li>
                    : ""

            } */}
        </ul>
    )
}
