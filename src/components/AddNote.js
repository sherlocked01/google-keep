import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const characterLimit = 200;
  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText, noteTitle);
      setNoteText("");
      setNoteTitle("");
    }
  };
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#FDF8F5" }}>
        <CardContent>
          <textarea
            className="addNote"
            rows="1"
            cols="1"
            placeholder="Type to add a title..."
            value={noteTitle}
            onChange={handleTitleChange}
            style={{ width: "100%" }}
          ></textarea>
          <textarea
            className="addNote"
            rows="8"
            cols="10"
            placeholder="Type to add a note..."
            value={noteText}
            onChange={handleChange}
            style={{ width: "100%" }}
          ></textarea>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            onClick={handleSaveClick}
            variant="contained"
            style={{ backgroundColor: "#4F4846" }}
          >
            Save
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default AddNote;
