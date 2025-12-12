import { useState } from "react";
import "./App.css";
import EnhancedTable from "./EnhancedTable.jsx";
import InputBase from "./InputBase.jsx";
import Buttons from "./Buttons.jsx";
import AddForm from "./AddForm.jsx";

function createData(id, name, age) {
  return { id, name, age };
}

const initialRows = [
  createData(1, "Luis Gonzalo Achig Carcelen", 24),
  createData(2, "Jessiel Josue Chasiguano Santin", 22),
  createData(3, "Bryan Fabricio Chileno Agualongo", 23),
  createData(4, "Kleber Alejandro Chiliquinga Lara", 25),
  createData(5, "Kenny Israel Cisneros Calderon", 22),
  createData(6, "Davinson Mayer Diaz Tapia", 24),
  createData(7, "Juan Pablo Morillo Macias", 22),
  createData(8, "Gissela Dayana Muzo Anchapaxi", 21),
  createData(9, "Abel Eduardo Navarrete Giler", 25),
  createData(10, "Liz Daisy Pillajo Cabrera", 20),
  createData(11, "Joseph Alexander Ponce Naranjo", 24),
  createData(12, "Rodrigo Javier Saransig Briones", 23),
  createData(13, "Alex Armando Tituana Ushina", 22),
  createData(14, "Jonathan Rolando Villarreal Cardenas", 25),
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [rows, setRows] = useState(initialRows);
  const [selected, setSelected] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleDelete = () => {
    setRows((prev) => prev.filter((r) => !selected.includes(r.id)));
    setSelected([]);
  };

  const handleAdd = ({ name, age }) => {
    setRows((prev) => {
      const maxId = prev.length ? Math.max(...prev.map((r) => r.id)) : 0;
      return [...prev, { id: maxId + 1, name, age: Number(age) }];
    });
    setShowAddForm(false);
  };

  const handleToggleAdd = () => setShowAddForm((s) => !s);

  return (
    <>
      <InputBase value={searchTerm} onChange={setSearchTerm} />
      <EnhancedTable
        searchTerm={searchTerm}
        rows={rows}
        selected={selected}
        setSelected={setSelected}
      />
      <AddForm
        visible={showAddForm}
        onAdd={handleAdd}
        onClose={() => setShowAddForm(false)}
      />

      <Buttons
        onDelete={handleDelete}
        disabled={selected.length === 0}
        onToggleAdd={handleToggleAdd}
      />
    </>
  );
}

export default App;
