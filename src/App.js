import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import NotesList from "./components/NotesList";
import Header from "./components/Header";
import PinnedNotesList from "./components/PinnedNotesList";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "First title",
      text: "This is my first note!",
      date: "28/09/2022",
    },
    {
      id: nanoid(),
      title: "Second title",
      text: "This is my second note!",
      date: "28/09/2022",
    },
    {
      id: nanoid(),
      title: "Third title",
      text: "This is my third note!",
      date: "28/09/2022",
    },
    {
      id: nanoid(),
      title: "Fourth title",
      text: "This is my new note!",
      date: "28/09/2022",
    },
  ]);

  const [pinnedNotes, setPinnedNotes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text, title) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const deletePinnedNote = (id) => {
    const newNotes = pinnedNotes.filter((note) => note.id !== id);
    setPinnedNotes(newNotes);
  };

  const editNote = (text, id, title) => {
    const newNotes = notes;
    const date = new Date();
    for (var i = 0; i < newNotes.length; i++) {
      if (newNotes[i].id === id) {
        newNotes[i].text = text;
        newNotes[i].date = date.toLocaleDateString();
        newNotes[i].title = title;
      }
    }
    setNotes(newNotes);
  };

  const editPinnedNote = (text, id, title) => {
    const newNotes = pinnedNotes;
    const date = new Date();
    for (var i = 0; i < pinnedNotes.length; i++) {
      if (newNotes[i].id === id) {
        newNotes[i].text = text;
        newNotes[i].date = date.toLocaleDateString();
        newNotes[i].title = title;
      }
    }
    setPinnedNotes(newNotes);
  };

  const pinNote = (id) => {
    var newNote = {};
    for (var i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        newNote = notes[i];
      }
    }
    const newNotes = [...pinnedNotes, newNote];
    setPinnedNotes(newNotes);

    deleteNote(id);
  };

  const unPinNote = (id) => {
    var newNote = {};
    for (var i = 0; i < pinnedNotes.length; i++) {
      if (pinnedNotes[i].id === id) {
        newNote = pinnedNotes[i];
      }
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);

    deletePinnedNote(id);
  };

  return (
    <div className="dark-mode">
      <Header handleSearchNote={setSearchText} />
      <div className="container">
        <PinnedNotesList
          notes={pinnedNotes}
          handleUnpinNote={unPinNote}
          handleDeleteNote={deletePinnedNote}
          handleEditNote={editPinnedNote}
        />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleEditNote={editNote}
          handlePinNote={pinNote}
        />
      </div>
    </div>
  );
}

export default App;
