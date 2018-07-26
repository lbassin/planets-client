import React from 'react'
import Title from './Title';
import Form from './Form';

class NewPage extends React.Component {

    constructor(props) {
        super(props);

        this.submitted = this.submitted.bind(this);
    }

    submitted() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Title/>
                <Form submittedCallback={this.submitted} history={this.props.history}/>
            </div>
        );
    }
}

export default NewPage;