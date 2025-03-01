import { Note } from '../types/Note';
import { NewNote } from '../types/NewNote';

declare global {
  interface Window {
    _env_: {
      REACT_APP_API_URL: string;
    };
  }
}


const API_URL = window._env_.REACT_APP_API_URL || 'http://localhost:8080';

const mock = false;

export const noteService = {
  getAllNotes: async (): Promise<Note[]> => {
    if (!mock) {
      try {
        const response = await fetch(`${API_URL}/notes`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return await response.json();
      } catch (error) {
        console.error('Error fetching notes:', error);
        throw error;
      }
    } else {
      // Mock data for testing
      return [
        {
          id: 1,
          title: 'First Note',
          content: 'This is the content of the first note.',
          labels: ['work', 'urgent'],
          urls: ['http://example.com'],
          color: '#FF5733'
        },
        {
          id: 2,
          title: 'Second Note',
          content: 'This is the content of the second note.',
          labels: ['personal'],
          urls: ['http://example.org'],
          color: '#33FF57'
        },
        {
          id: 3,
          title: 'Third Note',
          content: 'This is the content of the third note.',
          labels: ['work'],
          urls: ['http://example.net'],
          color: '#3357FF'
        },
        {
          id: 4,
          title: 'Fourth Note',
          content: 'This is the content of the fourth note.',
          labels: ['urgent'],
          urls: ['http://example.edu'],
          color: '#FF33A1'
        },
        {
          id: 5,
          title: 'Fifth Note',
          content: 'This is the content of the fifth note.',
          labels: ['personal', 'work'],
          urls: ['http://example.io'],
          color: '#A133FF'
        }
      ];
    }
  },

  createNote: async (note: NewNote): Promise<Note> => {
    try {
      const response = await fetch(`${API_URL}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error adding note:', error);
      throw error;
    }
  }
};