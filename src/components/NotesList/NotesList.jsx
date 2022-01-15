import React from 'react';
import { NoteItem } from '../../components';

export const NotesList = ({ children, ...props }) => {
    return (
        <>
            <NoteItem />
            <NoteItem />
            <NoteItem />
            <NoteItem />
        </>
    );
};
