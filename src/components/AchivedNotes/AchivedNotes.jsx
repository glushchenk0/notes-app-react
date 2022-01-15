import React from 'react';
import { NotesList, TableRowContainer, TableColLayout } from '../../components';

export const AchivedNotes = ({ children }) => {
    return (
        <>
            <TableRowContainer className={'bg-secondary text-white'}>
                <TableColLayout />
            </TableRowContainer>
            <NotesList />
        </>
    );
};
