import setEditorThemeBasedOnTimeOfDay from "./setEditorThemeBasedOnTimeOfDay";
import getSavedInputCode from "./getSavedInputCode";
import transpileCurrentInputCodeOnInit from "./transpileCurrentInputCodeOnInit";

const currentTheme = setEditorThemeBasedOnTimeOfDay(8, 18, {
    sunriseTheme: "default",
    sunsetTheme: "darcula"
})

const currentInputCode = getSavedInputCode();

const [currentTranspiledCode, errorState] = transpileCurrentInputCodeOnInit(currentInputCode);

const initialCodeEditorState = {
    currentInputCode,
    currentTranspiledCode,
    editorOptions: {
        theme: currentTheme,
        lineNumbers: true,
        lineWrapping: true,
        spellCheck: true,
        pollInterval: 5000,
        styleActiveLine: { nonEmpty: false },
        extraKeys: { 'Ctrl-/': 'toggleComment' },
        placeholder: "Type code here",
        mode:  "javascript"
    },
    error: errorState
}

export default initialCodeEditorState;