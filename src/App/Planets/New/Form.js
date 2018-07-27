import React from 'react';
import Axios from 'axios/index';
import Config from '../../../vars'
import PropTypes from 'prop-types';
import FormErrors from './FormErrors';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            errors: {},
            formValid: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let state = this.state;
        const name = event.target.name;
        const value = event.target.value;

        state.data[name] = value;

        this.setState(state, () => this.validateFields(name, value));
    }

    validateFields(name, value) {
        let errors = this.state.errors;
        delete(errors[name]);

        switch (name) {
            case 'name':
                if (value.length > 255) {
                    errors[name] = 'name length shoud be 255 max';
                }
                break;
            case 'age':
            case 'population':
                if (!value.match(/^[0-9]+$/i)) {
                    errors[name] = name + ' should be a number greater than 0';
                }
                break;

        }

        this.setState({
            errors: errors,
            formValid: Object.keys(errors).length === 0
        });
    }

    static errorClass(error) {
        return (!error || error.length === 0 ? '' : 'border-danger');
    }

    handleSubmit(event) {
        event.preventDefault();

        Axios.post(Config.baseUrl + 'planets', this.state.data, {headers: {'Content-Type': 'application/json'}})
            .then(() => {
                this.props.submittedCallback();
            })
            .catch((error) => {
                console.error(error.response.data);
                const errors = this.state.errors;
                error.response.data.forEach((error) => {
                    errors[error.property_path] = error.message;
                });

                this.setState({errors: errors});
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <FormErrors errors={this.state.errors} />
                <div className={"form-group"}>
                    <label className={"col-6 offset-3"}>
                        Name
                        <input type="text" name={"name"} required
                               className={`form-control ${Form.errorClass(this.state.errors.name)}`}/>
                    </label>
                </div>
                <div className={"form-group"}>
                    <label className={"col-6 offset-3"}>
                        Age
                        <input type="text" name={"age"} required
                               className={`form-control ${Form.errorClass(this.state.errors.age)}`}/>
                    </label>
                </div>
                <div className={"form-group"}>
                    <label className={"col-6 offset-3"}>
                        Population
                        <input type="text" name={"population"} required
                               className={`form-control ${Form.errorClass(this.state.errors.population)}`}/>
                    </label>
                </div>
                <div className={"form-group"}>
                    <div className={"col-6 offset-3"}>
                        <button type={"button"} className={"btn btn-secondary float-left"}
                                onClick={this.props.history.goBack}>Back
                        </button>
                        <button type={"submit"} className={"btn btn-primary float-right"}
                                disabled={!this.state.formValid}>Submit
                        </button>
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