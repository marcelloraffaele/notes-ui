import React from 'react';
import Note from './Note';

interface NoteListProps {
  notes: { title: string; content: string }[];
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
        <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Note list</h2>
        <div className="w-full">
            <div className="flex flex-col w-full mb-10 sm:flex-row">
            {notes.map((note, index) => (
                <Note key={index} title={note.title} content={note.content} />
            ))}
            </div>
        </div>
    </div>
    
  );
};

export default NoteList;