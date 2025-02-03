import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    content: '',
    labels: '',
    urls: ''
  });

  // Fetch notes from API
  const fetchNotes = async () => {
    try {
      const res = await fetch('http://localhost:8080/notes');
      const data = await res.json();
      setNotes(data);
    } catch (err) {
      console.error('Error fetching notes:', err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // New: Delete a note
  const handleDelete = async (note) => {
    try {
      const res = await fetch(`http://localhost:8080/notes/${note.id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        fetchNotes();
      } else {
        console.error('Failed to delete note');
      }
    } catch (err) {
      console.error('Error deleting note:', err);
    }
  };

  // New: Edit a note
  const handleEdit = (note) => {
    setFormData({
      id: note.id,
      title: note.title,
      content: note.content,
      labels: note.labels.join(', '),
      urls: note.urls.join(', ')
    });
    setEditingNote(note.id);
    setShowForm(true);
  };

  // Submit: create or update a note
  const handleSubmit = async (e) => {
    e.preventDefault();
    const notePayload = {
      id: formData.id,
      title: formData.title,
      content: formData.content,
      labels: formData.labels ? formData.labels.split(',').map(label => label.trim()) : [],
      urls: formData.urls ? formData.urls.split(',').map(url => url.trim()) : []
    };

    try {
      let res;
      if (editingNote) {
        res = await fetch(`http://localhost:8080/notes/${editingNote}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(notePayload)
        });
      } else {
        res = await fetch('http://localhost:8080/notes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(notePayload)
        });
      }
      if (res.ok) {
        fetchNotes();
        setFormData({ id: '', title: '', content: '', labels: '', urls: '' });
        setEditingNote(null);
        setShowForm(false);
      } else {
        console.error(editingNote ? 'Failed to update note' : 'Failed to add note');
      }
    } catch (err) {
      console.error('Error submitting note:', err);
    }
  };

  return (
    <div className="App container">
      <header className="App-header">
        <h1>Notes App</h1>
        
        <button
          className="btn btn-primary"
          onClick={() => {
            setShowForm(!showForm);
            // Reset editing state when cancelling
            if (showForm) setEditingNote(null);
          }}
        >
          {showForm ? "Cancel" : editingNote ? "Edit Note" : "Add Note"}
        </button>
        {showForm && (
          <form onSubmit={handleSubmit} className="mt-3">
            <div className="form-group">
              <label>Id</label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Content</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Labels (comma separated)</label>
              <input
                type="text"
                name="labels"
                value={formData.labels}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>URLs (comma separated)</label>
              <input
                type="text"
                name="urls"
                value={formData.urls}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-success mt-2">
              {editingNote ? "Update Note" : "Submit Note"}
            </button>
          </form>
        )}
        {/* Updated notes list rendering using Bootstrap panel */}
        {notes.map(note => (
          <div key={note.id} className="panel panel-default">
            <div className="panel-heading">
		          <h3 className="panel-title">
                {note.title}
                
		          </h3>
            </div>
            <div className="panel-body">
              {note.content}
              <br />
              <span className="pull-right">
                  <button 
                    className="btn btn-warning btn-xs" 
                    onClick={() => handleEdit(note)}
                  >
                    Modify
                  </button>
                  <button 
                    className="btn btn-danger btn-xs ml-1" 
                    onClick={() => handleDelete(note)}
                  >
                    Delete
                  </button>
                </span>
            </div>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
