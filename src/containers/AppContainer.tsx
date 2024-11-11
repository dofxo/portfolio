import { useState } from "react";
import PagesContainer from "./PagesContainer";
import { SideBar } from "../components/sidebar/";
import MainLayout from "../templates/layouts/MainLayout";
import { Typography } from "@mui/material";
import Page from "../pages/parts/Page";
import SideBarContainer from "./SideBarContainer";
import MainContext from "../context";
import { DrawerActionButton } from "../components/drawer";
import SwipeableViews from "react-swipeable-views";
import { About, Home } from "../pages";

const AppContainer = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  //@ts-ignore
  const handlePageNumber = (event: any, newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };

  const tabs = [
    <Page pageNumber={pageNumber} index={0}>
      <Home />
    </Page>,
    <Page pageNumber={pageNumber} index={1}>
      <About />
    </Page>,
    <Page pageNumber={pageNumber} index={2}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        رزومه من
      </Typography>
    </Page>,
    <Page pageNumber={pageNumber} index={3}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        نمونه کارها
      </Typography>
    </Page>,
    <Page pageNumber={pageNumber} index={4}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        ارتباط با من
      </Typography>
    </Page>,
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
          <DrawerActionButton />
          <PagesContainer>
            <SwipeableViews index={pageNumber} onChangeIndex={handlePageNumber}>
              {tabs.map((item, idx) => (
                <div key={idx}>{item}</div>
              ))}
            </SwipeableViews>
          </PagesContainer>
        </MainLayout>
      </MainContext.Provider>
    </>
  );
};

export default AppContainer;
