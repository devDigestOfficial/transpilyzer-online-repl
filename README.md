![Transpilyzer Logo](src/images/esx-es5.svg)

# Transpilyzer Online REPL
Transpilyzer Online REPL is used for transpiling next generation JavaScript  code into a backwards compatible version of JavaScript in real-time.

DEPLOYED SITE: https://transpilyzer-repl.netlify.app/

## 📦 Core packages

1. Frontend - React
2. Code Editor - Codemirror
3. Real-time Frontend Transpiler - Babel/Standalone
4. Styling - Bootstrap
5. Miscellaneous - Lodash

## 💎 Transpiling Code Once The User Stops Typing
Without adding a transpilation delay feature in the application, the error message / output is displayed immediately while you are still typing. This is introduces bad User Experience (UX). So to fix this, the debounce method provided by lodash was used. This allows you to execute some code after a certain number of milliseconds has passed. Therefore in this application, the conversion/transpile function is called after 1000 milliseconds (after 1 second has passed) once user stops typing.

## ⚡ Features

1. Transpilation of modern JavaScript to backward compatible JavaScript
2. TypeScript transpilation support
3. React (JSX) transpilation support
3. Light Mode and Night Mode
4. Error dispay upon invalid syntax
5. Remember unsaved changes even when you exit the browser (Code autosave)

## ⚙️ Running locally

At the root of your project run <code>npm i</code> and <code>npm start</code> to start the application.
