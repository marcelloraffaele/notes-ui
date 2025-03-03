import React from 'react';
import { Note } from '../types/Note';


const NoteComponent: React.FC<Note> = ({ title, content, labels /*, urls, color*/ }) => {
  return (
    <div className="relative h-full p-5 bg-yellow-100 border-2 border-yellow-200 rounded-lg shadow-md">
      <div>
        <h1 className="text-gray-900 mt-2">{title}</h1>
        <p className="text-gray-600 mt-2 text-sm text-left">{content}</p>
      </div>
      
      
      
      {labels && labels.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {labels.map((label /*, index*/) => (
            <span 
              key={label} 
              className="px-2 py-1 text-xs font-medium text-gray-700 bg-yellow-400 rounded-full"
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default NoteComponent;