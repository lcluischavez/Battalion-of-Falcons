import React from "react"; 
import { Route } from "react-router-dom";
import { TaskProvider } from "./task/TaskProvider";
//import { EventProvider } from "./event/EventProvider";
//import { ArticleProvider } from "./article/ArticleProvider";
import TaskList from "./task/TaskList";
//import EventList from "./event/EventList";
//import ArticleList from "./article/ArticleList";
import TaskForm from "./task/TaskForm";
import { MessageProvider } from "./message/MessageProvider";
import MessageForm from "./message/MessageForm";


export default (props) => {
    return (
        <>
            <TaskProvider>
                <Route exact path="/">
                    <h2>Tasks</h2>
                    <TaskForm />
                    <TaskList />
                </Route>
            </TaskProvider>

            <MessageProvider>
                <Route exact path="/messages/create">
                    <MessageForm />
                </Route>
            </MessageProvider>
        </>
    )
}

