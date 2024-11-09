import { useState } from "react";
import PagesContainer from "./PagesContainer";
import { SideBar } from "../components/sidebar/";
import MainLayout from "../templates/layouts/MainLayout";
import { Box, Typography } from "@mui/material";
import Page from "../pages/parts/Page";
import SideBarContainer from "./SideBarContainer";
import MainContext from "../context";
import { DrawerActionButton } from "../components/drawer";
import SwipeableViews from "react-swipeable-views";

const AppContainer = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  //@ts-ignore
  const handlePageNumber = (event: any, newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };

  const tabs = [
    <Page pageNumber={pageNumber} index={0}>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: "url(../../assets/images/image.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Typography
          variant="h5"
          color="whitesmoke"
          sx={{ textAlign: "center", p: 2 }}
        >
          صفحه اصلی
        </Typography>
      </Box>
    </Page>,
    <Page pageNumber={pageNumber} index={1}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        درباره من
      </Typography>
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
