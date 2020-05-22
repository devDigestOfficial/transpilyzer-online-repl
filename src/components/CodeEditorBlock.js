import React, { useReducer } from 'react';
import CodeInputBlock from './CodeInputBlock';
import CodeOutputBlock from './CodeOutputBlock';
import codeEditorStateReducer from '../utils/codeEditorStateReducer';
import initialCodeEditorState from '../utils/initialCodeEditorState';
import 'codemirror';
import 'codemirror/addon/display/placeholder';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/comment/comment';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import './CodeEditorBlock.css';
import 'codemirror/theme/darcula.css';




export const CodeEditorContext = React.createContext();

const {Provider} = CodeEditorContext

const CodeEditorBlock = () => {
    const [currentCodeEditorState, dispatch] = useReducer(codeEditorStateReducer, initialCodeEditorState);
    
    return (
        <Provider value={{currentCodeEditorState, dispatch}}>
            <div id="editor-block-wrapper" className="d-flex flex-row"  style={{fontSize: "15px"}}>
                <CodeInputBlock/>
                <CodeOutputBlock/>
            </div>
        </Provider>
        
    )
}

export default CodeEditorBlock;