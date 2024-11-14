import Grid from "@mui/material/Grid2";

const PagesContainer = ({ children }: { children: any }) => {
  return (
    <Grid
      size={{ xs: 12, sm: 12, md: 9, lg: 10, xl: 10 }}
      className="mb-5"
      id="page-container"
    >
      {children}
    </Grid>
  );
};

export default PagesContainer;
