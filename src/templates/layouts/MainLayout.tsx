import Grid from "@mui/material/Grid2";

const MainLayout = ({ children }: { children: any }) => {
  return (
    <>
      <Grid container className="h-[100vh]">
        {children}
      </Grid>
    </>
  );
};

export default MainLayout;
