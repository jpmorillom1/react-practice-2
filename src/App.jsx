import { useState } from "react";
import "./App.css";
import EnhancedTable from "./EnhancedTable.jsx";
import InputBase from "./InputBase.jsx";
import Buttons from "./Buttons.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <InputBase value={searchTerm} onChange={setSearchTerm} />
      <EnhancedTable searchTerm={searchTerm} />
      <Buttons />
    </>
  );
}

export default App;
