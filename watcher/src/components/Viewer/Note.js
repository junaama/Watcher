import React, {useState} from 'react'
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

const Note = () => {
    const [editorState, setEditorState] = useState(()=> EditorState.createEmpty());

    return (
        <div>
        OPEN NOTES
            <Editor editorState={editorState} onChange={setEditorState}/>
        END NOTES
        </div>
    )
}
export default Note