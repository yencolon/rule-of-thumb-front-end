import React from 'react';
import Nav from './components/Nav';
import Banner from './components/Banner';
import { BeCountedAlert, Footer, SubmitName } from './components/Basics';

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <div className="max-centered">
        <BeCountedAlert />
        <main role="main">
          👉 Your code goes here 👈
        </main>
        <SubmitName />
        <Footer />
      </div>
    </>
  );
}

export default App;
