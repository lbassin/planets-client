import React from 'react'
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const PlanetsList = (props) => {
    return (
        <div className={'row'}>
            {props.planets.map(planet =>
                <div key={planet.id} className={'col-md-4 col-lg-3 text-center'}>
                    <div className={'card mb-4'}>
                        <div className={'card-body'}>
                            <p className={'card-text'}>{planet.name}</p>
                            <Link to={'/planet/' + planet.id} className={'btn btn-small btn-light'}>Show details</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};

PlanetsList.propTypes = {
    planets: PropTypes.array.isRequired
};

PlanetsList.defaultProps = {
    planets: []
};

export default PlanetsList;