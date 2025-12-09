import { useState } from "react";
import "./App.css";
import DataTable from "./DataTable.jsx";
import EnhancedTable from "./EnhancedTable.jsx";
import InitialFilters from "./InitialFilters.jsx";
import InputBase from "./InputBase.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DataTable />
      <br></br>
      <EnhancedTable />;<br></br>
      <InputBase />
      <InitialFilters />
    </>
  );
}

export default App;
