import React, { useState } from 'react';
import { Nav, Arrow, Sidenav, LeftContainer, MessageNav } from './Components'
import { GlobalStyles } from "./global";



function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <div className="flex">
        <div className="menu-flex">
        <Arrow open={open} setOpen={setOpen} />
        <Sidenav open={open} setOpen={setOpen} />
        </div>
        <LeftContainer />
        <div className="right-side">
        <MessageNav />
        </div>
      </div>

    </div>



  );
}

export default App;
