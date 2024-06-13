import React, { useState } from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Nav from "./Nav";
import DisplayColor from "./DisplayColor";
import FormDisplay from "./FormDisplay";


function App() {

    const [colors, setColors] = useState([
      {name:'red', value:'red'},
      {name:'blue', value:'blue'},
      {name:'green', value:'green'}
    ])

    const addColor = (color) => {
      setColors([...colors, color]);
    };

  return (
    <div className="App">
      <BrowserRouter>
        <Nav colors = {colors}/>
        <Routes>
          <Route path="/color/new" element={<FormDisplay addColor={addColor} />} />
          <Route path="/color/:color" element={<DisplayColor />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
