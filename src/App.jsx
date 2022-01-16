import React from 'react';
import {
    Layout,
    ActiveNotes,
    AchivedNotes,
    SummaryTable,
    AddForm,
} from './components';
function App() {
    return (
        <>
            <Layout>
                <ActiveNotes />
                <AddForm />
                <SummaryTable />
                <AchivedNotes />
            </Layout>
        </>
    );
}

export default App;
