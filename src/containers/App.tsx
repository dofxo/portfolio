import { useState } from "react";
import ContentContainer from "../components/ContentContainer";
import SideBar from "../components/SideBar";
import MainLayout from "../templates/layouts/MainLayout";
import { Typography } from "@mui/material";
import TabPanel from "../components/TabPanel";

const App = () => {
  const [value, setValue] = useState(0);

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
        <SideBar value={value} handleChange={handleChange} />
        <ContentContainer>
          {tabs.map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </ContentContainer>
      </MainLayout>
    </>
  );
};

export default App;
