import React from "react"; 
import { Route } from "react-router-dom";
import { TaskProvider } from "./task/TaskProvider";
//import { EventProvider } from "./event/EventProvider";
//import { ArticleProvider } from "./article/ArticleProvider";
import TaskList from "./task/TaskList";
//import EventList from "./event/EventList";
//import ArticleList from "./article/ArticleList";
import TaskForm from "./task/TaskForm";


export default (props) => {
    return (
        <>
            <TaskProvider>
                <Route exact path="/">
                    <h2>Tasks</h2>
                    <TaskForm />
                    <TaskList />
                    <h2>Events</h2>
                </Route>
            </TaskProvider>

            <TaskProvider>
                <Route exact path="/tasks" render={
                    props => <TaskList {...props} />
                } />
                <Route exact path="/tasks/create">
                    <TaskForm/>
                </Route>
            </TaskProvider>

        </>
    )
}