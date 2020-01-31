import React from "react"; 
import { Route } from "react-router-dom";

//import EventList from "./event/EventList";
//import { EventProvider } from "./event/EventProvider";

//import { ArticleProvider } from "./article/ArticleProvider";
//import ArticleList from "./article/ArticleList";

import TaskList from "./task/TaskList";
import { TaskProvider } from "./task/TaskProvider";
import TaskForm from "./task/TaskForm";

import MessageList from "./message/MessageList"
import MessageDetails from "./message/MessageDetails"
import { MessageProvider } from "./message/MessageProvider"
import MessageForm from "./message/MessageForm"

export default (props) => {
    return (
        <>
            <TaskProvider>
                <Route exact path="/">
                    <h2>Tasks</h2>
                    <TaskForm />
                    <TaskList />
                    <h2>Messages</h2>
                </Route>
            </TaskProvider>

            {/* <TaskProvider>
                <Route exact path="/tasks" render={
                    props => <TaskList {...props} />
                } />
                <Route exact path="/tasks/create">
                    <TaskForm/>
                </Route>
            </TaskProvider> */}

            <MessageProvider>
                <Route exact path="/messages" render={
                    props => <MessageList {...props} />
                } />
                <Route exact path="/messages/create">
                    <MessageForm />
                </Route>
                <Route path="/messages/:messageId(\d+)" render={
                    props => <MessageDetails {...props} />
                } />
            </MessageProvider>
        </>
    )
}
