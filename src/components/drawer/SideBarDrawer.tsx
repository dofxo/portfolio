import { Drawer } from "@mui/material";
import { SideBarContent } from "../sidebar";
import { useContext } from "react";
import MainContext from "../../context";

const SideBarDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useContext(MainContext);
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
        <SideBarContent isInDrawer={true} />
      </Drawer>
    </>
  );
};

export default SideBarDrawer;
