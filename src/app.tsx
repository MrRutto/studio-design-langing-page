import React from "react";
import { Hero, Navbar } from "components";
import './styles.scss';

const App = () => (
  <div style={{ backgroundColor: "#FEFEFE"}}>
    <Navbar />
    <Hero />
  </div>
);

export default App;