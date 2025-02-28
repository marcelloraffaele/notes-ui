import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-200 p-4 shadow-md flex flex-col items-center">
      <img src="/note.png" alt="Logo" className="h-16 w-16" />
      <h1 className="text-3xl font-bold text-white">Note</h1>
    </header>
  );
};

export default Header;