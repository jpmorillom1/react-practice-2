import { useState } from "react";
import "./App.css";
import EnhancedTable from "./EnhancedTable.jsx";
import InputBase from "./InputBase.jsx";
import Buttons from "./Buttons.jsx";

function createData(id, name, age) {
  return { id, name, age };
}

const initialRows = [
  createData(1, "Cupcake", 5),
  createData(2, "Donut", 8),
  createData(3, "Eclair", 7),
  createData(4, "Frozen yoghurt", 4),
  createData(5, "Gingerbread", 9),
  createData(6, "Honeycomb", 6),
  createData(7, "Ice cream sandwich", 3),
  createData(8, "Jelly Bean", 2),
  createData(9, "KitKat", 10),
  createData(10, "Lollipop", 1),
  createData(11, "Marshmallow", 11),
  createData(12, "Nougat", 12),
  createData(13, "Oreo", 13),
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [rows, setRows] = useState(initialRows);
  const [selected, setSelected] = useState([]);

  const handleDelete = () => {
    setRows((prev) => prev.filter((r) => !selected.includes(r.id)));
    setSelected([]);
  };

  return (
    <>
      <InputBase value={searchTerm} onChange={setSearchTerm} />
      <EnhancedTable
        searchTerm={searchTerm}
        rows={rows}
        selected={selected}
        setSelected={setSelected}
      />
      <Buttons onDelete={handleDelete} disabled={selected.length === 0} />
    </>
  );
}

export default App;
