import React from "react";
import {Route, Switch} from "react-router-dom";
import PlanetsPage from "./Planets/PlanetsPage";

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={PlanetsPage}/>
        </Switch>
    </main>
);

export default Main;