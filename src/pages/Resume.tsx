import { Box, Card, CardContent } from "@mui/material";
import TitleAdder from "../HOC/TitleAdder";
import CustomDivier from "./parts/CustomDivier";
import { HomeRepairServiceRounded, SchoolRounded } from "@mui/icons-material";

import EducationTimeLine from "./parts/EducationTimeLine";
import JobsTimeLine from "./parts/JobsTimeLine";

const Resume = () => {
  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
      }}
    >
      <CardContent className="flex flex-col gap-20">
        <Box>
          <CustomDivier
            textAlign="center"
            title="تجربیات"
            icon={<HomeRepairServiceRounded />}
            color="success"
          />
          <JobsTimeLine />
        </Box>
        <Box>
          <CustomDivier
            textAlign="center"
            title="تحصیلات"
            icon={<SchoolRounded />}
            color="warning"
          />
          <EducationTimeLine />
        </Box>
      </CardContent>
    </Card>
  );
};

export default TitleAdder(Resume, "رزومه من");
