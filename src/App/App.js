import React from "react";
import {Route, Switch} from "react-router-dom";
import TestPage from "./TestPage";

const App = () => (
    <div className={'container'}>
        <main>
            <Switch>
                <Route exact path="/" component={TestPage}/>
            </Switch>
        </main>
    </div>
);

export default App;
