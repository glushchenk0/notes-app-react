import React from 'react';
import { useSelector } from 'react-redux';
import { SummaryItem } from '../../components';

export const SummaryList = ({ children, ...props }) => {
    const notes = useSelector((state) => state.notes.notes);
    const allCategories = new Set();
    for (const note of notes) {
        allCategories.add(note.category);
    }
    const stats = [];
    for (const category of allCategories) {
        const active = notes
            .filter((note) => note.category === category)
            .filter((note) => note.archived === true).length;
        const archived = notes
            .filter((note) => note.category === category)
            .filter((note) => note.archived === false).length;
        const stat = {
            category: category,
            active: active,
            acrhived: archived,
        };
        stats.push(stat);
    }
    return (
        <>
            {stats.map((stat) => (
                <SummaryItem key={stat.category} {...stat} />
            ))}
        </>
    );
};
