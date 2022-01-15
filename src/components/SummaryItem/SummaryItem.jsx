import React from 'react';
import { TableRowContainer } from '../../components';

export const SummaryItem = ({
    category = 'Task',
    acrhived = '3',
    active = '5',
    ...props
}) => {
    return (
        <TableRowContainer>
            <div class='col-6 m-3'>{category}</div>
            <div class='col m-3'>{acrhived}</div>
            <div class='col m-3'>{active}</div>
        </TableRowContainer>
    );
};
