import React from 'react';
import Navbar from '../components/Navbar';
import CodeEditorBlock from '../components/CodeEditorBlock';
import Footer from '../components/Footer';

function HomePage() {
    return (
      <>
        <Navbar/>
        <CodeEditorBlock />
        <Footer/>
      </>
  );
}

export default HomePage;