import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Note({note, handleEdit, handleDelete}) {
  
  return (
              
    <Card>
    <Card.Header key={note.id}>{note.title}</Card.Header>
    <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.content}</Card.Text>
        <Button variant="primary" onClick={() => handleEdit(note)}>Modify</Button>
        <Button variant="danger" onClick={() => handleDelete(note)}>Delete</Button>
    </Card.Body>
    </Card>
  );
}

export default Note;
