import { Tab, Tabs } from "@mui/material";

import {
  HomeRounded,
  FaceRounded,
  TextSnippetRounded,
  TerminalRounded,
  ConnectWithoutContactRounded,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const SideBarTabs = ({
  value,
  handleChange,
  setDrawerOpen,
}: {
  value: number;
  handleChange: (event: any, newValue: number) => void;
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
  );
};

export default SideBarTabs;
