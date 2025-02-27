import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import AddNote from './components/AddNote'
import NoteList from './components/NoteList'
import { noteService } from './services/NoteService'
import { Note } from './types/Note'

function App() {
    const [notes, setNotes] = useState<Note[]>([]);

    const fetchNotes = async () => {
        try {
            const data = await noteService.getAllNotes();
            setNotes(data);
        } catch (error) {
            console.error('Failed to fetch notes:', error);
        }
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    const addNote = async (title: string, content: string) => {
        try {
            await noteService.createNote({ title, content });
            fetchNotes(); // Refresh the notes list after adding a new note
        } catch (error) {
            console.error('Failed to add note:', error);
        }
    };

    return (
        <>
            <div className='App'>
                <Header />
                
                <div className="container mx-auto p-4">
                    <AddNote onAdd={addNote} />
                    <NoteList notes={notes} />
                    
                </div>
            </div>
        </>
    )
}

export default App