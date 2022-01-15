import React from 'react';
import { SummaryItem } from '../../components';

export const SummaryList = ({ children, ...props }) => {
    return (
        <>
            <SummaryItem />
            <SummaryItem />
            <SummaryItem />
        </>
    );
};
