<p align="center">
  <img src="src/images/esx-es5.svg" alt="Transpilyzer Logo">
</p>

# Transpilyzer Online REPL
Transpilyzer Online REPL is used for transpiling next generation JavaScript  code into a backwards compatible version of JavaScript in real-time.

Check out the [deployed site](https://transpilyzer-repl.netlify.app/)

## 📦 Core Packages

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
4. Error display upon invalid syntax
5. Remember unsaved changes even when you exit the browser (Code autosave)

## ⚙️ Running Locally

At the root of your project run <code>npm i</code> and <code>npm start</code> to start the application.


## UI

### Light Mode

![Light Theme](screenshots/Transpilyzer_REPL-Light_Mode_Demo.gif)

### Night Mode

![Night Theme](screenshots/Transpilyzer_REPL-Night_Mode_Demo.gif)
