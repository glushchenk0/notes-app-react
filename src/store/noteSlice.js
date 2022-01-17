import { createSlice } from '@reduxjs/toolkit';
import LocalStorageService from '../services/LocalStorageService';
import Helper from '../helpers/helpres';

const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [
            {
                id: 0,
                name: 'B-day',
                updated: '2021, 2, 30',
                category: 'Task',
                content: 'Holiday',
                dateslist: '',
                archived: false,
            },
            {
                id: 1,
                name: 'Shopping List',
                updated: '2021, 3, 20',
                category: 'Task',
                content: 'Tomatoes, bread',
                dateslist: '',
                archived: false,
            },
            {
                id: 2,
                name: 'The theory of evolution',
                updated: '2021, 3, 27',
                category: 'Random Thought',
                content:
                    'The evolution evolution  evolution  evolution  evolution  evolution.',
                dateslist: '',
                archived: false,
            },
            {
                id: 3,
                name: 'New Feature',
                updated: '2021, 4, 5',
                category: 'Idea',
                content: 'Implement new feature 3/5/2021',
                dateslist: '3/5/2021, 5/5/2021',
                archived: false,
            },
            {
                id: 4,
                name: 'William Gaddis',
                updated: '2021, 4, 7',
                category: 'Random Thought',
                content: 'Power doesn`t counted...',
                dateslist: '',
                archived: false,
            },
            {
                id: 5,
                name: 'Books',
                updated: '2021, 4, 15',
                category: 'Task',
                content: 'The Lean Startup',
                dateslist: '',
                archived: false,
            },
            {
                id: 6,
                name: 'Redesign',
                updated: '2021, 4, 20',
                category: 'Idea',
                content: 'Change UI/UX',
                dateslist: '',
                archived: false,
            },
            {
                id: 7,
                name: 'ARCHIVED | B-day',
                updated: '2021, 2, 30',
                category: 'Task',
                content: 'Holiday',
                dateslist: '',
                archived: true,
            },
        ],
    },
    reducers: {
        saveNote(state, action) {
            const existing = state.notes.find(
                (note) => note.id === action.payload.id
            );
            const currentDate = new Date();
            const datesList = Helper.parseDate(action.payload.content)
                ? `${currentDate.getDate()}/${
                      currentDate.getMonth() + 1
                  }/${currentDate.getFullYear()}, ${Helper.parseDate(
                      action.payload.content
                  )}`
                : '';
            if (existing) {
                existing.name = action.payload.name;
                existing.updated = currentDate.toISOString();
                existing.category = action.payload.category;
                existing.content = action.payload.content;
                existing.dateslist = datesList;
            } else {
                const noteToSave = {
                    id: Math.floor(Math.random() * 1000000),
                    name: action.payload.name,
                    content: action.payload.content,
                    updated: currentDate.toISOString(),
                    category: action.payload.category,
                    dateslist: datesList,
                    archived: false,
                };
                state.notes.push(noteToSave);
            }

            LocalStorageService.write(state.notes);
        },
        deleteNote(state, action) {
            console.log('action.payload.id - ', action.payload.id);
            let index = -1;
            for (let i = 0; i < state.notes.length; i++) {
                if (state.notes[i].id === action.payload.id) {
                    index = i;
                    break;
                }
            }
            if (index > -1) {
                state.notes.splice(index, 1);
            } else {
                throw new Error('указан не верный ID');
            }
            state.notes.filter((note) => note.id !== action.payload.id);
        },
        archiveNote(state, action) {
            console.log('action.payload.id - ', action.payload.id);
            const existing = state.notes.find(
                (note) => note.id === action.payload.id
            );
            existing.updated = new Date().toISOString();
            existing.archived = !existing.archived;
        },
    },
});

export const { saveNote, deleteNote, archiveNote } = noteSlice.actions;

export default noteSlice.reducer;
