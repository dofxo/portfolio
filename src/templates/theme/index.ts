import { createTheme } from "@mui/material";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";

const baseTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "IRANSansX, Roboto",
  },
  palette: {
    primary: {
      main: "#7A5DCB",
    },
    secondary: {
      main: "#bd93f9",
    },
  },
});

export const theme = createTheme({
  ...baseTheme,
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTabs: {
      styleOverrides: {
        scrollButtons: {
          color: baseTheme.palette.primary.main,
          "&:hover": {
            color: baseTheme.palette.primary.main,
          },
        },
      },
    },
  },
});

export const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, stylisRTLPlugin],
});
