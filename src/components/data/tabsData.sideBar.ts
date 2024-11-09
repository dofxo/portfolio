import {
  HomeRounded,
  FaceRounded,
  TextSnippetRounded,
  TerminalRounded,
  ConnectWithoutContactRounded,
} from "@mui/icons-material";

export const tabProps = (index: number) => {
  return {
    id: `sidebar-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};

export const tabs = [
  { text: "خانه", icon: HomeRounded },
  { text: "درباره من", icon: FaceRounded },
  { text: "رزومه من", icon: TextSnippetRounded },
  { text: "نمونه کارها", icon: TerminalRounded },
  { text: "ارتباط با من", icon: ConnectWithoutContactRounded },
];
