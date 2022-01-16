import React from 'react';
import { TableRowContainer } from '../../components';

export const AddForm = () => {
    return (
        <form id='form'>
            <TableRowContainer>
                <div className='col-3 mt-3 mb-3'>
                    <input
                        id='inputNoteName'
                        type='text'
                        class='form-control'
                        placeholder='Note name'
                        aria-label='Notename'
                        aria-describedby='basic-addon1'
                    />
                </div>
                <div className='col-2  mt-3 mb-3'>
                    <select
                        className='form-control selector'
                        id='inputNoteCategory'
                        placeholder='Category'
                    >
                        <option value='Task'>Task</option>
                        <option value='Random Thought'>Random Thought</option>
                        <option value='Idea'>Idea</option>
                    </select>
                </div>
                <div className='col  mt-3 mb-3'>
                    <textarea
                        placeholder='Note content'
                        className='notes__body form-control'
                        id='inputNoteBody'
                        rows='1'
                    ></textarea>
                </div>
            </TableRowContainer>
            <div className='addButton d-flex flex-row-reverse'>
                <button
                    type='submit'
                    id='btnAddNote'
                    className='btn btn-secondary mb-3'
                >
                    Create Note
                </button>
            </div>
        </form>
    );
};
