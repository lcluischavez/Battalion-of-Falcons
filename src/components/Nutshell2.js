import React from "react"
import { Route } from "react-router-dom"
import NavBar from "./nav/Navbar"
import ApplicationViews from "./ApplicationViews"
import "./Nutshell2.css"

export default () => (
    <>
        <NavBar />
        <ApplicationViews />

        <Route render={() => {
            if (localStorage.getItem("currentUser")) {
                return (
                    <>
                        <Route render={props => <NavBar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)