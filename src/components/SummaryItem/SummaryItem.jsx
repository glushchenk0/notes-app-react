import React from 'react';
import { TableRowContainer } from '../../components';

export const SummaryItem = ({ category, active, acrhived }) => {
    return (
        <TableRowContainer>
            <div className='col-6 m-3'>{category}</div>
            <div className='col m-3'>{acrhived}</div>
            <div className='col m-3'>{active}</div>
        </TableRowContainer>
    );
};
