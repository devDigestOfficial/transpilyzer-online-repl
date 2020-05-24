import React, { useRef, useEffect, useContext } from 'react';
import _ from 'lodash';
import * as Babel from "@babel/standalone";

import { Controlled as CodeMirror } from 'react-codemirror2';
import ErrorAlert from './ErrorAlert';

import { CodeEditorContext } from './CodeEditorBlock';
import setCurrentInputCodeToLocalStorage from '../utils/setCurrentInputCodeToLocalStorage';


function CodeInputBlock() {

  const debounceRef = useRef();
  const { currentCodeEditorState, dispatch } = useContext(CodeEditorContext);
  const { currentInputCode, editorOptions } = currentCodeEditorState;


  const transpileCode = (inputCode) => {
    try {
      
      const transpiledOutputCode = Babel.transform(inputCode, { filename: 'repl.tsx', presets: ['env', 'react', 'typescript'] }).code;
  
      dispatch({type: "SET_OUTPUT_VALUE", payload: {transpiledOutputCode}});
    } catch (error) {
      dispatch({type: "DISPLAY_ERROR", payload: {errorMessage: error.message}});
    }
  }

  const handleOnBeforeChange = (editor, data, value) => {
    const inputCode = value;
    dispatch({ type: "SET_INPUT_VALUE", payload: { inputCode } });
    debounceRef.current(inputCode);
    
  }

  useEffect(() => {
    setCurrentInputCodeToLocalStorage(currentInputCode);
  }, [currentInputCode]);

  useEffect(() => {
    debounceRef.current = _.debounce(transpileCode, 1000);
  }, []);


    return (
      <div id="code-input-block" className="w-50 d-flex flex-column">
        <CodeMirror
          value={currentInputCode}
          // className="h-100"
          options={editorOptions}
          onBeforeChange={handleOnBeforeChange}
        />
        <ErrorAlert/>
      </div> 
  );
}

export default CodeInputBlock;

