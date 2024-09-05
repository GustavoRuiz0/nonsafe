import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Hero from './components/Hero.jsx';
import Writers from './components/Writers';


function App() {
  return (
    <div className={"bg-black"}>
      <Navbar />
      <Hero/>
      <Main/>
      <Writers/>
    </div>
  );
}

export default App;