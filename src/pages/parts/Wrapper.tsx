import { Card } from "@mui/material";

const Wrapper = ({ children }: { children: any }) => {
  return (
    <Card
      sx={{
        backgroundColor: "whitesmoke",
        overflow: "hidden",
        minHeight: "100vh",
        pb: 5,
      }}
    >
      {children}
    </Card>
  );
};

export default Wrapper;
