import React, { useState } from 'react';
import { Nav, Sidenav, LeftContainer, MessageContainer, RightContainer, ContactContainer, MessageNav, InfoIcon } from './Components'
import { GlobalStyles } from "./global";



function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <div className="flex">
        <Sidenav />
        <LeftContainer />
        <RightContainer />
      </div>

    </div>



  );
}

export default App;
