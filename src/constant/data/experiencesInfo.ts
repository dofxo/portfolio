import {
  Coffee,
  DataObjectRounded,
  LaptopMacRounded,
} from "@mui/icons-material";

export const experiencesInfo = [
  {
    title: "تعداد قهوه های خورده شده",
    icon: Coffee,
    total: 1600,
    color: "#D2691E",
    prefix: "+",
  },
  {
    title: "تعداد پروژه های من",
    icon: DataObjectRounded,
    total: 2,
    color: "#2F4F4F",
    prefix: "+",
  },
  {
    title: "تجربه کار (سال)",
    icon: LaptopMacRounded,
    total: new Date().getFullYear() - 2022,
    color: "#4682B4",
  },
];
