import React from 'react';
import { useSelector } from 'react-redux';
import { NotesList, TableRowContainer, TableColLayout } from '../../components';

export const AchivedNotes = ({ activeNote }) => {
    const notes = useSelector((state) => state.notes.notes);
    const archivedNotes = notes
        .filter((note) => note.archived === true)
        .sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    return (
        <>
            <TableRowContainer
                className={'bg-secondary text-white'}
                id='archived-table'
            >
                <TableColLayout />
            </TableRowContainer>
            <NotesList notes={archivedNotes} activeNote={activeNote} />
        </>
    );
};
