import React from 'react';
import { Layout, ActiveNotes, AchivedNotes, SummaryTable } from './components';
function App() {
    return (
        <>
            <Layout>
                <ActiveNotes />
                <SummaryTable />
                <AchivedNotes />
            </Layout>
        </>
    );
}

export default App;
