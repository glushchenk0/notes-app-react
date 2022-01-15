import React from 'react';

export const Layout = ({ children, ...props }) => {
    return (
        <div className='container container-fluid' {...props}>
            {children}
        </div>
    );
};
