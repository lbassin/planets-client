import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={'row mb-3'}>
            <div className={'col-12'}>
                <Link to={'/new'} className={'float-right btn btn-primary'}>Add new planet</Link>
            </div>
        </div>
    );
};

export default Header;