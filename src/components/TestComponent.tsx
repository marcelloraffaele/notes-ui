import React from 'react';
import Note from './NoteComponent';

const TestComponent : React.FC = () => {
  return (

    <div className="container">
      
      <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div className="bg-white border-2 border-green-500 rounded-lg">01</div>
        <div className="bg-white border-2 border-blue-500 rounded-lg">02</div>
        <div className="bg-white border-2 border-yellow-500 rounded-lg">03</div>
        <div className="bg-white border-2 border-red-500 rounded-lg">05</div>
        <div className="bg-white border-2 border-brown-500 rounded-lg">06</div>
        <div className="bg-white border-2 border-yellow-500 rounded-lg">07</div>
      </div>
    </div>

    
  );
};

export default TestComponent;