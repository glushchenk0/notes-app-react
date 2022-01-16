import React from 'react';
import { TableRowContainer } from '../../components';
import Helper from '../../helpers/helpres';
import { ReactComponent as ArchiveIcon } from '../../assets/archive-solid.svg';
import { ReactComponent as DeleteIcon } from '../../assets/trash-alt-regular.svg';
import { ReactComponent as EditIcon } from '../../assets/edit-solid.svg';

export const NoteItem = ({ id, name, updated, category, content, dates }) => {
    const date = `${updated.getDate()}/${
        updated.getMonth() + 1
    }/${updated.getFullYear()}`;
    const currentDate = new Date();
    const datesList = Helper.parseDate(content)
        ? `${currentDate.getDate()}/${
              currentDate.getMonth() + 1
          }/${currentDate.getFullYear()}, ${Helper.parseDate(content)}`
        : '';
    return (
        <TableRowContainer className={'notes__list-item'} data-note-id={id}>
            <div className='col m-3 text-truncate'>{name}</div>
            <div className='col m-3 text-truncate'>{date}</div>
            <div className='col m-3 text-truncate'>{category}</div>
            <div className='col m-3 text-truncate'>{content}</div>
            <div className='col m-3 text-truncate'>{datesList}</div>
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
