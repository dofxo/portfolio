import { useState } from "react";
import ContentContainer from "./ContentContainer";
import { SideBar } from "../components/sidebar/";
import MainLayout from "../templates/layouts/MainLayout";
import { Typography } from "@mui/material";
import TabPanel from "../components/TabPanel";
import SideBarContainer from "./SideBarContainer";
import MainContext from "../context";

const AppContainer = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  //@ts-ignore
  const handlePageNumber = (event: any, newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };

  const tabs = [
    <TabPanel pageNumber={pageNumber} index={0}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        صفحه اصلی
      </Typography>
    </TabPanel>,
    <TabPanel pageNumber={pageNumber} index={1}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        درباره من
      </Typography>
    </TabPanel>,
    <TabPanel pageNumber={pageNumber} index={2}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        رزومه من
      </Typography>
    </TabPanel>,
    <TabPanel pageNumber={pageNumber} index={3}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        نمونه کارها
      </Typography>
    </TabPanel>,
    <TabPanel pageNumber={pageNumber} index={4}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        ارتباط با من
      </Typography>
    </TabPanel>,
  ];

  return (
    <>
      <MainContext.Provider
        value={{ pageNumber, handlePageNumber, drawerOpen, setDrawerOpen }}
      >
        <MainLayout>
          <SideBarContainer>
            <SideBar />
          </SideBarContainer>
          <ContentContainer>
            {tabs.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </ContentContainer>
        </MainLayout>
      </MainContext.Provider>
    </>
  );
};

export default AppContainer;
