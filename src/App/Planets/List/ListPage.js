import React from 'react';
import Axios from "axios/index";
import Title from "./Title";
import Header from "./Header";
import Grid from "./Grid";
import Config from "../../../vars";

class ListPage extends React.Component {
    constructor() {
        super();

        this.state = {
            planets: []
        };
    }

    componentDidMount() {
        Axios.get(Config.baseUrl + 'planets').then((response) => {
            this.setState({planets: response.data});
        });
    }

    render() {
        return (
            <div>
                <Title planetCount={this.state.planets.length}/>
                <Header/>
                <Grid planets={this.state.planets}/>
            </div>
        )
    }
}

export default ListPage;