// import React from "react";
// import { Route } from "react-router-dom";
// import { TaskProvider } from "./task/TaskProvider";
// //import { EventProvider } from "./event/EventProvider";
// import { ArticleProvider } from "./article/ArticleProvider";
// //import { MessageProvider } from "./message/MessageProvider";
// import TaskList from "./task/TaskList";
// //import EventList from "./event/EventList";
// import ArticleList from "./article/ArticleList";
// import TaskForm from "./task/TaskForm";
// //import EventForm from "./event/EventForm";
// import ArticleForm from "./article/ArticleForm";
// //import MessageForm from "./message/MessageForm";

// export default (props) => {
//     return (
//         <>
//             <TaskProvider>
//                 <ArticleProvider>
//                     <Route exact path="/">
//                         <h2>Tasks</h2>
//                         <TaskForm />
//                         <TaskList />
//                         <h2>Articles</h2>
//                         <ArticleForm />
//                         <ArticleList />
//                     </Route>
//                 </ArticleProvider>
//             </TaskProvider>

//             <TaskProvider>
//                 <Route exact path="/tasks" render={
//                     props => <TaskList {...props} />
//                 } />
//                 <Route exact path="/tasks/create">
//                     <TaskForm />
//                  </Route>
//             </TaskProvider>
//         </>
//     )
// }

import React from "react";
import { Route } from "react-router-dom";
import { TaskProvider } from "./task/TaskProvider";
import { EventProvider } from "./event/EventProvider";
import { ArticleProvider } from "./article/ArticleProvider";
import TaskList from "./task/TaskList";
import EventList from "./event/EventList";
import ArticleList from "./article/ArticleList";
import TaskForm from "./task/TaskForm";
import EventForm from "./event/EventForm";
import ArticleForm from "./article/ArticleForm";

export default props => {
    return (
        <>
            <TaskProvider>
                <EventProvider>
                    <ArticleProvider>
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
                    </ArticleProvider>
                </EventProvider>
            </TaskProvider>

        </>
    );
};

{/* <TaskProvider>
<Route
    exact
    path="/tasks"
    render={props => <TaskList {...props} />}
/>

</TaskProvider>

<EventProvider>
<Route
    exact
    path="/events"
    render={props => <EventList {...props} />}
/>
</EventProvider>

<ArticleProvider>
<Route
    exact
    path="/articles"
    render={props => <ArticleList {...props} />}
/>
</ArticleProvider> */}
