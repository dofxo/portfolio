import { Tab, Tabs } from "@mui/material";

import { grey } from "@mui/material/colors";
import { useContext } from "react";
import MainContext from "../../context";
import { tabProps, tabs } from "../data/tabsData.sideBar";

const SideBarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      onChange={handlePageNumber}
      className="max-h-[350px]"
      sx={{ p: 0.5 }}
    >
      {tabs.map((item, idx) => (
        <Tab
          sx={{
            "&.MuiTab-root": {
              minHeight: 30,
              backgroundColor: grey[800],
              borderRadius: 2,
              color: "whitesmole",
              my: 0.7,
              mx: 1,
            },
            color: "whitesmoke",
          }}
          onClick={() => setDrawerOpen(false)}
          icon={<item.icon />}
          label={item.text}
          key={idx}
          iconPosition="start"
          {...tabProps(idx)}
        />
      ))}
    </Tabs>
  );
};

export default SideBarTabs;
