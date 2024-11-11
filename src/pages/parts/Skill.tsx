import { Box, Chip } from "@mui/material";

const Skill = ({ icon }: { icon: string }) => {
  return (
    <Chip
      className="skill-chip"
      icon={
        <Box component="img" src={icon} sx={{ height: 30, borderRadius: 2 }} />
      }
      sx={{ p: 1, background: "transparent", mr: 2 }}
    />
  );
};

export default Skill;
