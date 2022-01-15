import React from 'react';
import {
    SummaryList,
    TableRowContainer,
    SummaryTableHeader,
} from '../../components';

export const SummaryTable = ({ children }) => {
    return (
        <>
            <TableRowContainer className={'bg-secondary text-white'}>
                <SummaryTableHeader />
            </TableRowContainer>
            <SummaryList />
        </>
    );
};
