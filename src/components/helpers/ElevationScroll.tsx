import { useScrollTrigger } from "@mui/material";
import { cloneElement } from "react";

const ElevationScroll = (props: any) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return children
    ? cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
};

export default ElevationScroll;
