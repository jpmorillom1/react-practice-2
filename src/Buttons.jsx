import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Buttons({ onDelete, disabled = false }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Add</Button>
      <Button variant="outlined" onClick={onDelete} disabled={disabled}>
        Delete
      </Button>
    </Stack>
  );
}
