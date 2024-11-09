import { MenuRounded } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";

const DrawerActionButton = ({
  setDrawerOpen,
}: {
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
