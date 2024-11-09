import { Avatar, Box, Divider, Tab, Tabs, Typography } from "@mui/material";

import {
  HomeRounded,
  FaceRounded,
  TextSnippetRounded,
  TerminalRounded,
  ConnectWithoutContactRounded,
  FavoriteRounded,
  CopyrightRounded,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const DrawerContent = ({
  value,
  handleChange,
  isInDrawer = false,
  setDrawerOpen,
}: {
  value: number;
  handleChange: (event: any, newValue: number) => void;
  isInDrawer?: boolean;
  setDrawerOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const tabProps = (index: number) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  const tabs = [
    { text: "خانه", icon: HomeRounded },
    { text: "درباره من", icon: FaceRounded },
    { text: "رزومه من", icon: TextSnippetRounded },
    { text: "نمونه کارها", icon: TerminalRounded },
    { text: "ارتباط با من", icon: ConnectWithoutContactRounded },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: grey[900],
        height: 1,
      }}
    >
      <Box
        sx={{
          display: {
            xs: isInDrawer ? "block" : "none",
            md: isInDrawer ? "none" : "block",
          },
        }}
      >
        <Avatar
          src="../../../assets/images/dofxo.jpg"
          variant="rounded"
          sx={{ height: "200px", width: "200px", margin: "0 auto", mb: 2 }}
        />
        <Typography variant="h6" color="whitesmoke">
          محمد کارگر
        </Typography>
        <Typography variant="caption" color="whitesmoke">
          Frontend Developer
        </Typography>

        <Divider variant="middle" sx={{ mt: 2, bgcolor: grey[300] }} />

        <Tabs
          orientation="vertical"
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          value={value}
          onChange={handleChange}
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
              onClick={() => {
                if (setDrawerOpen) setDrawerOpen(false);
              }}
              icon={<item.icon />}
              label={item.text}
              key={idx}
              iconPosition="start"
              {...tabProps(idx)}
            />
          ))}
        </Tabs>

        <Divider variant="middle" sx={{ bgcolor: grey[300] }} />
        <Box className="flex flex-grow flex-col gap-2 justify-end items-center !h-[100px]">
          <Typography variant="subtitle2" color="white">
            طراحی شده با{" "}
            <FavoriteRounded className="align-middle !h-[20px] text-red-500" />
          </Typography>
          <Typography variant="caption" color="whitesmoke">
            کپی رایت {new Date().getFullYear()}{" "}
            <CopyrightRounded className="align-middle h-[16px]" />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DrawerContent;
