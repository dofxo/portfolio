import { SideBarContent } from ".";
import { SideBarDrawer, DrawerActionButton } from "../drawer";

const SideBar = () => {
  return (
    <>
      <DrawerActionButton />
      <SideBarDrawer />
      <SideBarContent />
    </>
  );
};

export default SideBar;
