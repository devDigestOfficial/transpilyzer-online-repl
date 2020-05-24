import React from 'react';
import HomePage from './pages/HomePage';
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Transpilyzer Online REPL</title>
        <meta name="description" content="Transpilyzer REPL is an online tool that is used for transpiling next generation JavaScript code into a backwards compatible version of JavaScript in real-time" />
        <meta name="keywords" content="transpilyzer,babel,online repl, transpiler, compiler, javascript,ecmascript" />
      </Helmet>
      <HomePage />
    </>
  );
}

export default App;
