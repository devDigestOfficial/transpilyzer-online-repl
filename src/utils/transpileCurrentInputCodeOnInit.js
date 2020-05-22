import * as Babel from "@babel/standalone";

const transplieCurrentInputCodeOnInit = (currentInputCode) => {
    let currentTranspiledCode = "";
    try {
        currentTranspiledCode = Babel.transform(currentInputCode, { presets: ['env', 'react'] }).code;
        return [
            currentTranspiledCode, {
                show: false,
                errorMessage: null
            }
        ];
    } catch (error) {
        return [
            currentTranspiledCode, {
                show: true,
                errorMessage: error.message
            }
        ];
    }
}

export default transplieCurrentInputCodeOnInit;