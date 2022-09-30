import React, { useState } from "react";
import {
  MdDeleteForever,
  MdOutlinePushPin,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Note({
  id,
  title,
  text,
  date,
  handleDeleteNote,
  handleEditNote,
  handlePinNote,
}) {
  const [editNode, setEditNode] = useState(false);
  const [noteTitle, setNoteTitle] = useState(title);
  const [noteText, setNoteText] = useState(text);
  const [noteId, setNoteId] = useState("");
  const [noteDate, setNoteDate] = useState(date);

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleSaveClick = () => {
    handleEditNote(noteText, noteId, noteTitle);
    text = noteText;
    title = noteTitle;
    const newDate = new Date();
    setNoteDate(newDate.toLocaleDateString());
    setEditNode(!editNode);
  };

  return (
    <div>
      {editNode ? (
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <textarea
                className="editNote"
                rows="1"
                cols="1"
                placeholder="Type to add a title..."
                value={noteTitle}
                onChange={handleTitleChange}
                style={{ width: "100%" }}
              ></textarea>
              <textarea
                className="editNote"
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
      ) : (
        <div>
          <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "#DDAF94" }}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MdOutlinePushPin
                    className="md-icon"
                    onClick={() => {
                      handlePinNote(id);
                    }}
                  />
                </IconButton>
              }
              title={noteTitle}
              subheader={noteDate}
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {noteText}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <MdOutlineModeEditOutline
                  className="md-icon"
                  onClick={() => {
                    setEditNode(!editNode);
                    setNoteId(id);
                  }}
                />
              </IconButton>
              <IconButton aria-label="share">
                <MdDeleteForever
                  onClick={() => handleDeleteNote(id)}
                  className="md-icon"
                />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Note;
