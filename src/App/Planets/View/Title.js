import React from 'react'
import PropTypes from 'prop-types'

const Title = (props) => {
    return (
        <div className={'row'}>
            <div className={'col-12 text-center'}>
                <h1>Planet {props.name}</h1>
            </div>
        </div>
    );
};

Title.propTypes = {
    name: PropTypes.string.isRequired
};

Title.defaultProps = {
    name: ''
};

export default Title;