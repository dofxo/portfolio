import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid2";

const SideBarContainer = ({ children }: { children: any }) => {
  return (
    <Grid
      size={{ xs: 0, sm: 0, md: 3, lg: 2, xl: 2 }}
      sx={{ backgroundColor: grey[900] }}
    >
      {children}
    </Grid>
  );
};

export default SideBarContainer;
