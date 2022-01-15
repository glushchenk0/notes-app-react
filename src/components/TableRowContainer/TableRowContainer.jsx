import React from 'react';
import cn from 'classnames';

export const TableRowContainer = ({
    color = 'primary',
    className,
    children,
    ...props
}) => {
    return (
        <div
            className={cn('row mt-3 mb-3 border rounded', className)}
            {...props}
        >
            {children}
        </div>
    );
};
