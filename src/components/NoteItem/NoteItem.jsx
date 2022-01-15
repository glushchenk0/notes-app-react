import React from 'react';
import { TableRowContainer } from '../../components';
import { ReactComponent as ArchiveIcon } from '../../assets/archive-solid.svg';
import { ReactComponent as DeleteIcon } from '../../assets/trash-alt-regular.svg';
import { ReactComponent as EditIcon } from '../../assets/edit-solid.svg';

export const NoteItem = ({
    id = 0,
    name = 'Name',
    updated = '30/03/1997',
    category = 'Task',
    content = 'My BDay',
    dates = '',
    ...props
}) => {
    return (
        <TableRowContainer className={'notes__list-item'} data-note-id={id}>
            <div className='col m-3 text-truncate'>{name}</div>
            <div className='col m-3 text-truncate'>{updated}</div>
            <div className='col m-3 text-truncate'>{category}</div>
            <div className='col m-3 text-truncate'>{content}</div>
            <div className='col m-3 text-truncate'>{dates}</div>
            <div className='col-md-auto m-3'>
                <div className='edit d-inline note-edit m-1'>
                    <EditIcon />
                </div>
                <div className='archive d-inline note-archive m-1'>
                    <ArchiveIcon />
                </div>
                <div className='delete d-inline note-delete m-1'>
                    <DeleteIcon />
                </div>
            </div>
        </TableRowContainer>
    );
};
