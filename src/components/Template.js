import React from 'react';
import '../style/Template.scss'

const Template = ({children}) => {
    return (
        <div className="layoutContainer">{children}</div>
    );
};

export default Template;
