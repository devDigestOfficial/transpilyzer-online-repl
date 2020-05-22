import React, {useContext} from 'react';

import { CodeEditorContext } from './CodeEditorBlock';

import './ErrorAlert.css';

const ErrorAlert = () => {

    const { currentCodeEditorState } = useContext(CodeEditorContext);

    const { error } = currentCodeEditorState;

    return (
        (error.show === true) &&
       
            <pre
                id="error-section"
                className="alert alert-danger rounded-0 mb-0" role="alert">
                {error.errorMessage}
            </pre>

    );
}

export default ErrorAlert;

