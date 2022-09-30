import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
function NotesList({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleEditNote,
  handlePinNote,
  handleUnpinNote,
}) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}
          handlePinNote={handlePinNote}
          handleUnpinNote={handleUnpinNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}

export default NotesList;
