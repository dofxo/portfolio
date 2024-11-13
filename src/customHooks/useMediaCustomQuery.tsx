import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

const useMediaCustomQuery = (size: Breakpoint) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up(size));

  return isMatch;
};

export default useMediaCustomQuery;
