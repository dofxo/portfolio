import { Box, Drawer, Fab } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import DrawerContent from "./DrawerContent";
import { MenuRounded } from "@mui/icons-material";

const SideBar = ({
  value,
  handleChange,
}: {
  value: number;
  handleChange: (event: any, newValue: number) => void;
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Grid
      size={{ xs: 0, sm: 0, md: 3, lg: 2, xl: 2 }}
      sx={{ backgroundColor: grey[900] }}
    >
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

      <DrawerContent value={value} handleChange={handleChange} />
      <Drawer
        open={drawerOpen}
        variant="temporary"
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 300,
          },
        }}
      >
        <DrawerContent
          setDrawerOpen={setDrawerOpen}
          value={value}
          handleChange={handleChange}
          isInDrawer={true}
        />
      </Drawer>
    </Grid>
  );
};

export default SideBar;
