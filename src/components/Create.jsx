import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add"
import Fab from "@mui/material/Fab";

function Create(props) {
    const [isExpanded, changeExpanded] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
  
    function handleInputChange(event) {
      const { name, value } = event.target;
      if (name === "title") {
        setTitle(() => value);
      } else if (name === "content") {
        setContent(() => value);
      }
    }
  
    return (
      <div>
        <form className="create-note">
          {isExpanded && (
            <input
              name="title"
              placeholder="Title"
              onChange={handleInputChange}
            />
          )}
          <textarea
            name="content"
            placeholder="Take a note..."
            value={content}
            onChange={handleInputChange}
            onClick={() => {
              changeExpanded(() => true);
            }}
            rows={isExpanded ? 3 : 1}
          />
          {isExpanded && (
            <Fab>
              <AddIcon
                onClick={() => {
                  props.onCreate(title, content);
                  setTitle(() => "");
                  setContent(() => "");
                  changeExpanded(() => false);
                }}
              />
            </Fab>
          )}
        </form>
      </div>
    );
  }
  
  export default Create;