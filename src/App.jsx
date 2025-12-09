import { useState } from "react";
import "./App.css";
import DataTable from "./DataTable.jsx";
import EnhancedTable from "./EnhancedTable.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DataTable />
      <br></br>
      <EnhancedTable />;
    </>
  );
}

export default App;
