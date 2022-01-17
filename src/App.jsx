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
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('Random Thought');
    const [content, setContent] = useState('');
    const [activeNote, setActiveNote] = useState('');
    useEffect(() => {
        setId(activeNote.id);
        setName(activeNote.name);
        setCategory(activeNote.category);
        setContent(activeNote.content);
    }, [activeNote]);
    const dispatch = useDispatch();
    const handleAction = (e) => {
        e.preventDefault();
        if (name.trim().length) {
            dispatch(saveNote({ id, name, category, content }));
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
                    id={id}
                    name={name}
                    updateName={setName}
                    category={category}
                    updateCategory={setCategory}
                    content={content}
                    updateContent={setContent}
                    handleAction={handleAction}
                />
                <SummaryTable />
                <AchivedNotes activeNote={setActiveNote} />
            </Layout>
        </>
    );
}

export default App;
