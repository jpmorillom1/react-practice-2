import * as React from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function AddForm({ visible = false, onAdd, onClose }) {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");

  React.useEffect(() => {
    if (!visible) {
      setName("");
      setAge("");
    }
  }, [visible]);

  if (!visible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd?.({ name: name.trim(), age: age ? Number(age) : 0 });
    setName("");
    setAge("");
  };

  return (
    <Paper
      sx={{ p: 2, mb: 2, maxWidth: 480 }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          size="small"
        />
        <TextField
          label="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          size="small"
          sx={{ width: 96 }}
        />
        <Button type="submit" variant="contained">
          save
        </Button>
        <Button type="button" variant="outlined" onClick={onClose}>
          Cancel
        </Button>
      </Box>
    </Paper>
  );
}
