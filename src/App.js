import React from "react";
import Contact from "./Components/Contact/Contact";
import Handling from "./Components/Handling/Handling";
import Navbar from "./Components/Navbar/Navbar";
import Options from "./Components/Options/Options";
import Power from "./Components/Power/Power";
import Speed from "./Components/Speed/Speed";

function App() {
  return (
    <div>
      <Navbar />
      <Power />
      <Speed />
      <Handling />
      <Options />
      <Contact />
    </div>
  );
}

export default App;
