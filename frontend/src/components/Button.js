import { Button as MUIButton } from "@mui/material";

export default function Button({ label, onClick, variant = "contained" }) {
  return <MUIButton variant={variant} onClick={onClick}>{label}</MUIButton>;
}
