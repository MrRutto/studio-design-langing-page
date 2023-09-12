import React from "react";
import { Clients, Hero, Navbar } from "components";
import './styles.scss';

const App = () => (
  <div style={{ backgroundColor: "#FEFEFE"}}>
    <Navbar />
    <Hero />
    <Clients />
  </div>
);

export default App;