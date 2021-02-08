import React, { useState, useCallback } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

const Note = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const editor = React.useRef(null);
  const focusEditor = useCallback(() => {
    if (editor.current) {
      editor.current.focus();
    }
  }, [editor]);
  const boldText = (e) => {
    e.preventDefault();

    let nextState = RichUtils.toggleInlineStyle(editorState, "BOLD");
    setEditorState(nextState);
  };
  return (
    <div
      style={{ border: "1px solid black", minHeight: "6em", cursor: "text" }}
      onClick={focusEditor}
    >
      <button onMouseDown={boldText}>Bold</button>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        ref={editor}
        placeholder="Write something"
      />
    </div>
  );
};
export default Note;
