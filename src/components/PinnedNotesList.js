import React from "react";
import PinnedNote from "./PinnedNote";
function PinnedNotesList({
  notes,
  handleUnpinNote,
  handleDeleteNote,
  handleEditNote,
}) {
  return (
    <div
      className="notes-list"
      style={{ marginBottom: "20px", marginTop: "20px" }}
    >
      {notes.map((note) => (
        <PinnedNote
          key={note.id}
          id={note.id}
          title={note.title}
          text={note.text}
          date={note.date}
          handleUnpinNote={handleUnpinNote}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}
        />
      ))}
    </div>
  );
}

export default PinnedNotesList;
