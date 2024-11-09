import { Box, Divider } from "@mui/material";
import { grey } from "@mui/material/colors";
import { SideBarHeader, SideBarFooter, SideBarTabs } from ".";

const SideBarContent = ({ isInDrawer = false }: { isInDrawer?: boolean }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: grey[900],
        height: 1,
      }}
    >
      <Box
        sx={{
          display: {
            xs: isInDrawer ? "block" : "none",
            md: isInDrawer ? "none" : "block",
          },
        }}
      >
        <SideBarHeader />

        <Divider variant="middle" sx={{ mt: 2, bgcolor: grey[300] }} />

        <SideBarTabs />

        <Divider variant="middle" sx={{ bgcolor: grey[300] }} />
        <SideBarFooter />
      </Box>
    </Box>
  );
};

export default SideBarContent;
