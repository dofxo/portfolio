import { useState } from "react";
import ContentContainer from "./ContentContainer";
import { SideBar } from "../components/sidebar/";
import MainLayout from "../templates/layouts/MainLayout";
import { Typography } from "@mui/material";
import TabPanel from "../components/TabPanel";
import SideBarContainer from "./SideBarContainer";

const AppContainer = () => {
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  //@ts-ignore
  const handleChange = (event: any, newValue: number) => setValue(newValue);

  const tabs = [
    <TabPanel value={value} index={0}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        صفحه اصلی
      </Typography>
    </TabPanel>,
    <TabPanel value={value} index={1}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        درباره من
      </Typography>
    </TabPanel>,
    <TabPanel value={value} index={2}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        رزومه من
      </Typography>
    </TabPanel>,
    <TabPanel value={value} index={3}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        نمونه کارها
      </Typography>
    </TabPanel>,
    <TabPanel value={value} index={4}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        ارتباط با من
      </Typography>
    </TabPanel>,
  ];

  return (
    <>
      <MainLayout>
        <SideBarContainer>
          <SideBar value={value} handleChange={handleChange} />
        </SideBarContainer>
        <ContentContainer>
          {tabs.map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </ContentContainer>
      </MainLayout>
    </>
  );
};

export default AppContainer;
