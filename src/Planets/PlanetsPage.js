import React from 'react';
import Title from "./Title";

class PlanetsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            planets: []
        };
    }

    render() {
        return (
            <div className={'text-center'}>
                <Title planetCount={this.state.planets.length}/>
            </div>
        )
    }
}

export default PlanetsPage;