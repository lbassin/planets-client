import React from 'react';
import PropTypes from "prop-types";

const Details = (props) => {
    return (
        <div className={"text-center"}>
            <div className="row">
                <div className="col-6 offset-3">
                    <span>Population : {props.planet.population}</span>
                </div>
                <div className="col-6 offset-3">
                    <span>Age : {props.planet.age}</span>
                </div>
            </div>
        </div>
    );
};

Details.propTypes = {
    planet: PropTypes.object.isRequired
};

export default Details;