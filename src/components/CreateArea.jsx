import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expanded, setExpanded] = useState({ title: false, content: false });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value.trimStart(),
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setExpanded({ title: false, content: false });
    event.preventDefault();
  }

  function handlActive(event) {
    setExpanded((prevStatus) => {
      return { ...prevStatus, [event.target.name]: true };
    });
  }
  function handleBlur(event) {
    const { name, value } = event.target;
    setTimeout(() => {
      setExpanded((prevStatus) => {
        return { ...prevStatus, [name]: value.trim() ? true : false };
      });
    }, 10);
  }

  return (
    <div>
      <form className="create-note">
        {(expanded.title || expanded.content) && (
          <input
            name="title"
            onChange={handleChange}
            onFocus={handlActive}
            onBlur={handleBlur}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          onFocus={handlActive}
          onBlur={handleBlur}
          value={note.content}
          placeholder="Take a note..."
          rows={expanded.title || expanded.content ? 3 : 1}
        />

        <Zoom in={expanded.title || expanded.content}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
