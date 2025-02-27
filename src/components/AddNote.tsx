import React, { useState } from 'react';

interface AddNoteProps {
  onAdd: (title: string, content: string) => void;
}

const AddNote: React.FC<AddNoteProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddNote = () => {
    onAdd(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md m-2">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border-b-2 border-gray-300 focus:outline-none"
      />
      <textarea
        placeholder="Take a note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 mb-2 border-b-2 border-gray-300 focus:outline-none"
      />
      <button
        onClick={handleAddNote}
        className="mx-auto block rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-fuchsia-500 focus:outline-none"
      >
        Add Note
      </button>
    </div>
  );
};

export default AddNote;