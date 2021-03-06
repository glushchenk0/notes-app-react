import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, archiveNote } from '../../store/noteSlice';
import { TableRowContainer } from '../../components';
import { ReactComponent as ArchiveIcon } from '../../assets/archive-solid.svg';
import { ReactComponent as DeleteIcon } from '../../assets/trash-alt-regular.svg';
import { ReactComponent as EditIcon } from '../../assets/edit-solid.svg';

export const NoteItem = ({
    id,
    name,
    updated,
    category,
    content,
    dateslist,
    activeNote,
}) => {
    const dispatch = useDispatch();
    const onNoteDelete = () => {
        dispatch(deleteNote({ id }));
    };
    const onNoteArchive = () => {
        dispatch(archiveNote({ id }));
    };
    const onNoteSelect = () => {
        // EDIT NOTE
        activeNote({ id, name, updated, category, content, dateslist });
    };
    updated = new Date(updated);
    const date = `${updated.getDate()}/${
        updated.getMonth() + 1
    }/${updated.getFullYear()}`;
    return (
        <TableRowContainer className={'notes__list-item'} data-note-id={id}>
            <div className='col m-3 text-truncate'>{name}</div>
            <div className='col m-3 text-truncate'>{date}</div>
            <div className='col m-3 text-truncate'>{category}</div>
            <div className='col m-3 text-truncate'>{content}</div>
            <div className='col m-3 text-truncate'>{dateslist}</div>
            <div className='col-md-auto m-3'>
                <div className='edit d-inline note-edit m-1'>
                    <EditIcon onClick={onNoteSelect} />
                </div>
                <div className='archive d-inline note-archive m-1'>
                    <ArchiveIcon onClick={onNoteArchive} />
                </div>
                <div className='delete d-inline note-delete m-1'>
                    <DeleteIcon onClick={onNoteDelete} />
                </div>
            </div>
        </TableRowContainer>
    );
};
