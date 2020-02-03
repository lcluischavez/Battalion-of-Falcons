import React from "react";
import { Route } from "react-router-dom";

import { TaskProvider } from "./task/TaskProvider";
import { EventProvider } from "./event/EventProvider";
import { ArticleProvider } from "./article/ArticleProvider";
import { MessageProvider } from "./message/MessageProvider";
import { FriendProvider } from "./friends/FriendProvider";

import TaskList from "./task/TaskList";
import EventList from "./event/EventList";
import ArticleList from "./article/ArticleList";
import MessageList from "./message/MessageList";
import FriendList from "./friends/FriendList";

import TaskForm from "./task/TaskForm";
import EventForm from "./event/EventForm";
import ArticleForm from "./article/ArticleForm";
import MessageForm from "./message/MessageForm";
import FriendForm from "./friends/FriendForm";

export default props => {
    return (
        <>
            <TaskProvider>
                <EventProvider>
                    <ArticleProvider>
                        <FriendProvider>
                            <MessageProvider>
                                {/* Render the location list when http://localhost:3000/ */}
                                <Route
                                    exact
                                    path="/"
                                    render={props => <TaskList {...props} />}
                                />
                                <Route exact path="/tasks/create">
                                    <TaskForm />
                                </Route>

                                <Route
                                    exact
                                    path="/"
                                    render={props => <EventList {...props} />}
                                />
                                <Route exact path="/events/create">
                                    <EventForm />
                                </Route>

                                <Route
                                    exact
                                    path="/"
                                    render={props => <ArticleList {...props} />}
                                />
                                <Route exact path="/articles/create">
                                    <ArticleForm />
                                </Route>

                                <Route exact 
                                path="/" render={props => <MessageList {...props} />
                                } />
                                <Route exact path="/messages/create">
                                    <MessageForm />
                                </Route>
                                
                                <Route exact path="/" render={
                                    props => <FriendList {...props} />
                                } />
                                <Route exact path="/friends/create">
                                    <FriendForm />
                                </Route>
                            </MessageProvider>
                        </FriendProvider>
                    </ArticleProvider>
                </EventProvider>
            </TaskProvider>

        </>
    );
};
