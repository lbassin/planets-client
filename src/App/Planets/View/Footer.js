import React from 'react';

const Footer = (props) => {
    return (
        <div className={"row mt-5"}>
            <div className={"col-12 text-center"}>
                <button className={"btn btn-primary"} onClick={props.history.goBack}>Retour</button>
            </div>
        </div>
    );
};

export default Footer;
