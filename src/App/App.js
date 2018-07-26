import React from "react";
import {Route, Switch} from "react-router-dom";
import ListPage from "./Planets/List/ListPage";

const App = () => (
    <div className={'container'}>
        <main>
            <Switch>
                <Route exact path="/" component={ListPage}/>
            </Switch>
        </main>
    </div>
);

export default App;
