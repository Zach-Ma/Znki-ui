import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <Homepage count={12} />
    </div>
  );
}

export default App;
