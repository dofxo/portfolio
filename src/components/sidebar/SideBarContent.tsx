import { Box, Divider } from "@mui/material";
import { grey } from "@mui/material/colors";
import { SideBarHeader, SideBarFooter, SideBarTabs } from ".";

const SideBarContent = ({
  value,
  handleChange,
  isInDrawer = false,
  setDrawerOpen,
}: {
  value: number;
  handleChange: (event: any, newValue: number) => void;
  isInDrawer?: boolean;
  setDrawerOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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

        <SideBarTabs
          value={value}
          setDrawerOpen={setDrawerOpen}
          handleChange={handleChange}
        />

        <Divider variant="middle" sx={{ bgcolor: grey[300] }} />
        <SideBarFooter />
      </Box>
    </Box>
  );
};

export default SideBarContent;
