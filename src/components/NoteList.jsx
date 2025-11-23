import Note from './Note';

const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    return <p className='text-center text-gray-500'>No Notes Yet</p>;
  }

  const borderColors = {
    Low: 'border-green-500',
    Medium: 'border-yellow-500',
    High: 'border-red-500',
  };

  return (
    <div className='space-y-4'>
      {notes.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NoteList;
