import React from 'react';

const FormErrors = ({errors}) => {
    const isVisible = Object.keys(errors).length > 0;

    return (
        <div className={'row'} hidden={!isVisible}>
            <div className={'col-6 offset-3 text-center'}>
                <div className={'alert alert-danger'}>
                    {Object.keys(errors).map((name, i) => {
                        if (errors[name].length > 0) {
                            return <p key={i}>{errors[name]}</p>;
                        }
                    })}
                </div>
            </div>
        </div>
    )
};

export default FormErrors;
