const codeEditorStateReducer = (state, action) => {

    switch(action.type) {
        case 'SET_INPUT_VALUE':
            return {
                ...state,
                currentInputCode: action.payload.inputCode,
            };
        
        case 'SET_OUTPUT_VALUE':
            return {
                ...state,
                currentTranspiledCode: action.payload.transpiledOutputCode,
                error: {
                show: false,
                errorMessage: null
                }
            };
        
        case "DISPLAY_ERROR":
            return {
                ...state,
                currentTranspiledCode: "",
                error: {
                    show: true,
                    errorMessage: action.payload.errorMessage
                }
                };
        
            
        default:
            return;
    }
}

export default codeEditorStateReducer;