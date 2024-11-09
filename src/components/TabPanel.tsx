import { Box } from "@mui/material";

const TabPanel = ({
  children,
  value,
  index,
  ...others
}: {
  children: any;
  value: number;
  index: number;
  others?: any;
}) => {
  return (
    <div
      aria-labelledby={`sidebar-tab-${index}`}
      id={`tabpanel-${index}`}
      {...others}
      hidden={value !== index}
      role="tabpanel"
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
