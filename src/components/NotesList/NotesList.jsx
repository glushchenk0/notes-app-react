import React from 'react';
import { NoteItem } from '../../components';

export const NotesList = ({ notes, children, ...props }) => {
    return (
        <>
            {notes.map((note) => (
                <NoteItem key={note.id} {...note} />
            ))}
        </>
    );
};
