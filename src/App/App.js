import React from "react";
import {Route, Switch} from "react-router-dom";
import ListPage from "./Planets/List/ListPage";
import ViewPage from "./Planets/View/ViewPage";

const App = () => (
    <div className={'container'}>
        <main>
            <Switch>
                <Route exact path="/" component={ListPage}/>
                <Route path="/planet/:id" component={ViewPage}/>
            </Switch>
        </main>
    </div>
);

export default App;
