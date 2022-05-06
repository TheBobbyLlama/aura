import Box from "@mui/material/Box";
import Button from "../Button/Button";

export default function CustomDataTableFooter() {
  return (
    <Box
      sx={{ padding: "10px", display: "flex", flexDirection: "row-reverse" }}
    >
      <Button sx={{ fontWeight: "300", textTransform: "none", color: "white" }}>
        View All
      </Button>
    </Box>
  );
}
