import { Box } from "@mui/material";
import { devSkills } from "../../components/data/devSkills";
import Skill from "./Skill";

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
