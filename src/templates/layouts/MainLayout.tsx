import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Grid2";

const MainLayout = ({ children }: { children: any }) => {
  return (
    <>
      <Helmet>
        <title>وب سایت شخصی محمد کارگر</title>
      </Helmet>

      <Grid container className="h-[100vh]">
        {children}
      </Grid>
    </>
  );
};

export default MainLayout;
