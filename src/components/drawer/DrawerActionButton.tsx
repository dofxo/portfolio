import { MenuRounded } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";
import { useContext } from "react";
import MainContext from "../../context";

const DrawerActionButton = () => {
  const { setDrawerOpen } = useContext(MainContext);
  return (
    <Box
      sx={{
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
        top: 30,
        left: 0,
        position: "absolute",
      }}
    >
      <Fab
        onClick={() => setDrawerOpen(true)}
        aria-label="Sidebar"
        size="small"
        sx={{ m: 2, bgcolor: "primary.main" }}
      >
        <MenuRounded />
      </Fab>
    </Box>
  );
};

export default DrawerActionButton;
