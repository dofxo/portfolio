import { Box } from "@mui/material";
import Skill from "./Skill";
import {
  frontSkills,
  backSkills,
  generalSkills,
} from "../../constant/data/devSkills";
import CustomDivier from "../../components/general/CustomDivier.tsx";
import { SelfImprovementRounded } from "@mui/icons-material";
import CodeOffRoundedIcon from "@mui/icons-material/CodeOffRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

const Skills = () => {
  return (
    <Box className="flex flex-col gap-10">
      <Box>
        <CustomDivier
          textAlign="center"
          title="FrontEnd"
          icon={<CodeOffRoundedIcon />}
          color="error"
        />
        <Box className="flex justify-center gap-10 flex-wrap pb-[20px]">
          {frontSkills.map((item, idx) => (
            <Skill key={idx} icon={item} />
          ))}
        </Box>
      </Box>
      <Box>
        <CustomDivier
          textAlign="center"
          title="BackEnd"
          icon={<CodeRoundedIcon />}
          color="info"
        />
        <Box className="flex justify-center gap-10 flex-wrap pb-[20px]">
          {backSkills.map((item, idx) => (
            <Skill key={idx} icon={item} />
          ))}
        </Box>
      </Box>
      <Box>
        <CustomDivier
          textAlign="center"
          title="General"
          icon={<SelfImprovementRounded />}
          color="success"
        />
        <Box className="flex justify-center gap-10 flex-wrap pb-[20px]">
          {generalSkills.map((item, idx) => (
            <Skill key={idx} icon={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
