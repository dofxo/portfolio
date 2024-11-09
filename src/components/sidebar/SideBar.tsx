import { SideBarContent } from ".";
import { SideBarDrawer, DrawerActionButton } from "../drawer";

const SideBar = ({
  value,
  handleChange,
}: {
  value: number;
  handleChange: (event: any, newvalue: number) => void;
}) => {
  return (
    <>
      <DrawerActionButton setDrawerOpen={setDrawerOpen} />
      <SideBarDrawer
        value={value}
        setDrawerOpen={setDrawerOpen}
        drawerOpen={drawerOpen}
        handleChange={handleChange}
      />
      <SideBarContent value={value} handleChange={handleChange} />
    </>
  );
};

export default SideBar;
