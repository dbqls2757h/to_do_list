import React from 'react';
import '../style/Layout.scss'

const Layout = ({children}) => {
    return (
        <div className="layoutContainer">{children}</div>
    );
};

export default Layout;
