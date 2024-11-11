import { ArrowLeftRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";

const DevInfo = ({ children }: { children: any }) => {
  return (
    <Typography variant="body1" color="black" textAlign="left" sx={{ mt: 2 }}>
      {children}
      <ArrowLeftRounded fontSize="large" sx={{ color: "primary.main" }} />
    </Typography>
  );
};

export default DevInfo;
