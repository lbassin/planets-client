import React from 'react';
import Axios from 'axios';
import Config from '../../../vars';
import Title from './Title';
import Details from './Details';
import Footer from './Footer';

class ViewPage extends React.Component {
    constructor(props) {
        super();
        this.planetId = props.match.params.id;

        this.state = {
            planet: {}
        };
    }

    componentDidMount() {
        Axios.get(Config.baseUrl + 'planets/' + this.planetId).then((response) => {
            this.setState({planet: response.data});
        });
    }

    render() {
        return (
            <div>
                <Title name={this.state.planet.name}/>
                <Details planet={this.state.planet}/>
                <Footer history={this.props.history}/>
            </div>
        )
    }
}

export default ViewPage;