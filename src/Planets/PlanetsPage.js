import React from 'react';
import Title from "./Title";
import PlanetsList from "./PlanetsList";
import Axios from "axios/index";
import Header from "./Header";

class PlanetsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            planets: []
        };
    }

    componentDidMount() {
        Axios.get('http://127.0.0.1:8080/api/planets').then((response) => {
            this.setState({planets: response.data});
        });
    }

    render() {
        return (
            <div>
                <Title planetCount={this.state.planets.length}/>
                <Header/>
                <PlanetsList planets={this.state.planets}/>
            </div>
        )
    }
}

export default PlanetsPage;