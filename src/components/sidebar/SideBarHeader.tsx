import { Avatar, Typography } from "@mui/material";
import avatarImg from "../../../public/assets/images/dofxo.jpg";
import { RandomReveal } from "react-random-reveal";
import { farsiAlphabet } from "../../constant/persianAlphabet";

const SideBarHeader = () => {
  return (
    <>
      <Avatar
        src={avatarImg}
        variant="rounded"
        sx={{ height: "200px", width: "200px", margin: "0 auto", mb: 2 }}
      />
      <Typography variant="h6" color="primary">
        <RandomReveal
          isPlaying
          duration={2}
          characterSet={farsiAlphabet}
          characters="محمد کارگر"
        />
      </Typography>
      <Typography variant="caption" color="gray">
        <RandomReveal isPlaying duration={2} characters="Frontend Developer" />
      </Typography>
    </>
  );
};

export default SideBarHeader;
