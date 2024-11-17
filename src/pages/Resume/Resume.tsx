import { Box } from "@mui/material";
import TitleAdder from "../../HOC/TitleAdder";
import CustomDivier from "../../components/general/CustomDivier";
import { HomeRepairServiceRounded, SchoolRounded } from "@mui/icons-material";
import EducationTimeLine from "./EducationTimeLine";
import JobsTimeLine from "./JobsTimeLine";
import Model3D from "../../components/general/Model3D";
import Grid from "@mui/material/Grid2";
import Wrapper from "../parts/Wrapper";

const Resume = () => {
  return (
    <Wrapper>
      <Box className="mt-10 flex flex-col gap-[50px]">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box className="flex flex-col gap-10">
              <CustomDivier
                textAlign="center"
                title="تجربیات"
                icon={<HomeRepairServiceRounded />}
                color="success"
              />
              <JobsTimeLine />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box className="flex flex-col gap-10">
              <CustomDivier
                textAlign="center"
                title="تحصیلات"
                icon={<SchoolRounded />}
                color="warning"
              />
              <EducationTimeLine />
            </Box>
          </Grid>
        </Grid>
        <Model3D modelUrl="/models/lost_programmer.glb" />
      </Box>
    </Wrapper>
  );
};

export default TitleAdder(Resume, "رزومه من");
