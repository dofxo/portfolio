import { Box } from "@mui/material";

const TabPanel = ({
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
      {pageNumber === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
