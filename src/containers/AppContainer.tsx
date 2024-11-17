import { useEffect, useState } from "react";
import PagesContainer from "./PagesContainer";
import { SideBar } from "../components/sidebar/";
import MainLayout from "../templates/layouts/MainLayout";
import Page from "../pages/parts/Page";
import SideBarContainer from "./SideBarContainer";
import MainContext from "../context";
import { DrawerActionButton } from "../components/drawer";
import SwipeableViews from "react-swipeable-views";
import { About, Home, Projects, Resume, Contact } from "../pages";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";

const AppContainer = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // media query
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  //@ts-ignore
  const handlePageNumber = (event: any, newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };

  useEffect(() => {
    if (isMdUp) setDrawerOpen(false);
  }, [isMdUp]);

  const tabs = [
    <Page pageNumber={pageNumber} index={0}>
      <Home />
    </Page>,
    <Page pageNumber={pageNumber} index={1}>
      <About />
    </Page>,
    <Page pageNumber={pageNumber} index={2}>
      <Resume />
    </Page>,
    <Page pageNumber={pageNumber} index={3}>
      <Projects />
    </Page>,
    <Page pageNumber={pageNumber} index={4}>
      <Contact />
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
        <Toaster position="top-center" reverseOrder={false} />
      </MainContext.Provider>
    </>
  );
};

export default AppContainer;
