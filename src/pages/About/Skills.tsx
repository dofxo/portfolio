import { Box } from "@mui/material";
import Skill from "./Skill";
import { devSkills } from "../../constant/data/devSkills";

const Skills = () => {
  return (
    <Box className="flex justify-center gap-10 flex-wrap pb-[20px]">
      {devSkills.map((item, idx) => (
        <Skill key={idx} icon={item.icon} />
      ))}
    </Box>
  );
};

export default Skills;
