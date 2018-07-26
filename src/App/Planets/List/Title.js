import React from 'react'
import PropTypes from 'prop-types'

const Title = (props) => {
    let subTitle = <p>There is {props.planetCount} known planet</p>;
    if (props.planetCount > 1) {
        subTitle = <p>There are {props.planetCount} known planets</p>;
    }

    return (
        <div className={'row'}>
            <div className={'col-12 text-center'}>
                <h1>Planetarium</h1>
                {subTitle}
            </div>
        </div>
    );
};

Title.propTypes = {
    planetCount: PropTypes.number.isRequired
};

Title.defaultProps = {
    planetCount: 0
};

export default Title;