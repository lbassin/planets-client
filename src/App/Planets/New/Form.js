import React from 'react';
import Axios from 'axios/index';
import Config from '../../../vars'
import PropTypes from 'prop-types';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {data: {}};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let state = this.state;
        state.data[event.target.name] = event.target.value;

        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();

        Axios.post(Config.baseUrl + 'planets', this.state.data, {headers: {'Content-Type': 'application/json'}})
            .then(() => {
                this.props.submittedCallback();
            })
            .catch((error) => {
                console.error(error.response.data);
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <div className={"form-group"}>
                    <label className={"col-6 offset-3"}>
                        Name
                        <input type="text" name={"name"} className={"form-control"}/>
                    </label>
                </div>
                <div className={"form-group"}>
                    <label className={"col-6 offset-3"}>
                        Age
                        <input type="text" name={"age"} className={"form-control"}/>
                    </label>
                </div>
                <div className={"form-group"}>
                    <label className={"col-6 offset-3"}>
                        Population
                        <input type="text" name={"population"} className={"form-control"}/>
                    </label>
                </div>
                <div className={"form-group"}>
                    <div className={"col-6 offset-3"}>
                        <button type={"button"} className={"btn btn-secondary float-left"}
                                onClick={this.props.history.goBack}>Back
                        </button>
                        <button type={"submit"} className={"btn btn-primary float-right"}>Submit</button>
                    </div>
                </div>
            </form>
        );
    };
}

Form.propTypes = {
    submittedCallback: PropTypes.func.isRequired
};

export default Form;