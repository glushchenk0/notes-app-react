import React from 'react';
import { useSelector } from 'react-redux';
import { NotesList, TableRowContainer, TableColLayout } from '../../components';

export const ActiveNotes = () => {
    const notes = useSelector((state) => state.notes.notes);
    const activeNotes = notes
        .filter((note) => note.archived === false)
        .sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    return (
        <>
            <TableRowContainer className={'bg-secondary text-white'}>
                <TableColLayout />
            </TableRowContainer>
            <NotesList notes={activeNotes} />
        </>
    );
};
