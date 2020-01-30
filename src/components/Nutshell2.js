import React from "react"
import { Route } from "react-router-dom"
import ApplicationViews from "./ApplicationViews"
import Navbar from "./nav/Navbar"
// import Login from "./auth/Login"
// import Register from "./auth/Register"
// import "./Navbars.css"

export default () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("Nutshell2_customer")) {
                return (
                    <>
                        <Route render={props => <Navbar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                    </>
                )
            } 
        }} />
{/* 
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} /> */}
    </>
)
