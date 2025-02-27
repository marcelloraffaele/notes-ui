import React from 'react';
import { Note } from '../types/Note';


const NoteComponent: React.FC<Note> = ({ title, content, labels, urls, color }) => {
  return (
    <div className="relative h-full p-5 bg-yellow-100 border-2 border-yellow-200 rounded-lg">
      <div className="flex items-center -mt-1">
        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">{title}</h3>
      </div>
      
      <p className="mb-2 text-gray-600">{content}</p>
      
      {labels && labels.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {labels.map((label, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full"
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