import React, {useContext} from 'react';

import { UnControlled as CodeMirror } from 'react-codemirror2';

import { CodeEditorContext } from './CodeEditorBlock';

function CodeOutputBlock() {
  const { currentCodeEditorState } = useContext(CodeEditorContext);
  const { currentTranspiledCode, editorOptions } = currentCodeEditorState;


    return (
     
      <div id="code-output-block" className="w-50 d-flex flex-column">
        <CodeMirror
          value={currentTranspiledCode}
          className="h-100"
          options={{
            ...editorOptions,
            readOnly: true,
            extraKeys: {},
            placeholder: "Compiled output will be shown here"
          }}
        />
      </div>
        
     

  );
}

export default CodeOutputBlock;