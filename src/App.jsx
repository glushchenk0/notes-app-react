import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveNote } from './store/noteSlice';
import {
    Layout,
    ActiveNotes,
    AchivedNotes,
    SummaryTable,
    AddForm,
} from './components';
function App() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('Random Thought');
    const [content, setContent] = useState('');
    const [activeNote, setActiveNote] = useState('');
    console.log('activeNote--', activeNote);
    // useEffect(() => {
    //     setName(activeNote.name);
    //     setName(setCategory.category);
    //     setName(setContent.content);
    // }, [activeNote]);
    const dispatch = useDispatch();
    const handleAction = (e) => {
        e.preventDefault();
        if (name.trim().length) {
            dispatch(saveNote({ name, category, content }));
            setName('');
            setCategory('Random Thought');
            setContent('');
        }
    };
    return (
        <>
            <Layout>
                <ActiveNotes activeNote={setActiveNote} />
                <AddForm
                    name={name}
                    updateName={setName}
                    category={category}
                    updateCategory={setCategory}
                    content={content}
                    updateContent={setContent}
                    handleAction={handleAction}
                />
                <SummaryTable />
                <AchivedNotes />
            </Layout>
        </>
    );
}

export default App;
