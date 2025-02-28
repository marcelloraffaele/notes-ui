import React from 'react';
import NoteComponent from './NoteComponent';
import { Note } from '../types/Note';

interface NoteListProps {
  notes: Note[];
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
        <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Note list</h2>
        
            <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {notes.map((note /*, index*/) => (
                <NoteComponent id={note.id} title={note.title} content={note.content} labels={note.labels} />
            ))}
            </div>
        
    </div>
    
  );
};

export default NoteList;