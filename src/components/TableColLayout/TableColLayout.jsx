import React from 'react';
import { ReactComponent as ArchiveIcon } from '../../assets/archive-solid.svg';
import { ReactComponent as DeleteIcon } from '../../assets/trash-alt-regular.svg';

export const TableColLayout = () => {
    return (
        <>
            <div className='col m-3'>Name</div>
            <div className='col m-3'>Created</div>
            <div className='col m-3'>Category</div>
            <div className='col m-3'>Content</div>
            <div className='col m-3'>Dates</div>
            <div className='col-md-auto m-3'>
                <div
                    id='header-archive'
                    className='header-archive d-inline m-1'
                >
                    <a href='#archived-table'>
                        <ArchiveIcon />
                    </a>
                </div>
                <div className='delete d-inline m-1'>
                    <DeleteIcon />
                </div>
            </div>
        </>
    );
};
