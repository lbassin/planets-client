import React from "react";
import TodoPage from "./Todo/TodoPage";
import {Route, Switch} from "react-router-dom";
import TestPage from "./Test/TestPage";

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={TodoPage}/>
            <Route exact path="/test" component={TestPage}/>
        </Switch>
    </main>
);

export default Main;