import React from "react";

import "./App.css";
import AWS from "./modules/aws";
import AzureV10 from "./modules/azurev10";
import AzureV12 from "./modules/azurev12";

function App() {
  return (
    <div className="App">
      <AWS />
      <AzureV10 />
      <AzureV12 />
    </div>
  );
}

export default App;
