import { Drawer } from "@mui/material";
import { SideBarContent } from "../sidebar";

const SideBarDrawer = ({
  setDrawerOpen,
  drawerOpen,
  value,
  handleChange,
}: {
  value: number;
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange: (event: any, newvalue: number) => void;
}) => {
  return (
    <>
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
        <SideBarContent
          setDrawerOpen={setDrawerOpen}
          value={value}
          handleChange={handleChange}
          isInDrawer={true}
        />
      </Drawer>
    </>
  );
};

export default SideBarDrawer;
