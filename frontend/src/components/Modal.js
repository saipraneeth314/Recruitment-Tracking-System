import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

export default function Modal({ open, onClose, title, children }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
