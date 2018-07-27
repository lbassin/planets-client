import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import ListPage from "./Planets/List/ListPage";
import ViewPage from "./Planets/View/ViewPage";
import NewPage from "./Planets/New/NewPage";

const App = () => (
    <HashRouter>
        <div className={'container'}>
            <main>
                <Switch>
                    <Route exact path="/" component={ListPage}/>
                    <Route path="/planet/:id" component={ViewPage}/>
                    <Route path="/new" component={NewPage}/>
                </Switch>
            </main>
        </div>
    </HashRouter>
);

export default App;
