import { Box } from "@mui/material";

const Page = ({
  children,
  pageNumber,
  index,
  ...others
}: {
  children: any;
  pageNumber: number;
  index: number;
  others?: any;
}) => {
  return (
    <div
      aria-labelledby={`sidebar-tab-${index}`}
      id={`tabpanel-${index}`}
      hidden={pageNumber !== index}
      role="tabpanel"
      {...others}
    >
      {pageNumber === index && (
        <Box sx={{ height: "100vh", overflow: "hidden" }}>{children}</Box>
      )}
    </div>
  );
};

export default Page;
