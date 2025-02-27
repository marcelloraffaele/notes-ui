import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import AddNote from './components/AddNote'
import NoteList from './components/NoteList'

function App() {
    const [notes, setNotes] = useState<{ id: number; title: string; content: string }[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/notes')
            .then(response => response.json())
            .then(data => setNotes(data))
            .catch(error => console.error('Error fetching notes:', error));
    }, []);

    const addNote = (title: string, content: string) => {
        const newNote = { title, content };
        fetch('http://localhost:8080/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newNote)
        })
        .then(response => response.json())
        .then(data => setNotes([...notes, data]))
        .catch(error => console.error('Error adding note:', error));
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
