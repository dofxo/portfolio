import { Avatar, Box, IconButton, Typography } from "@mui/material";
import avatarImg from "/src/assets/images/dofxo.jpg";
import { RandomReveal } from "react-random-reveal";
import { farsiAlphabet } from "../../constant/persianAlphabet";
import { social } from "../data/socials";
import useMediaCustomQuery from "../../customHooks/useMediaCustomQuery";

const SideBarHeader = () => {
  const isSmUp = useMediaCustomQuery("sm");

  return (
    <>
      <Avatar
        src={avatarImg}
        variant="rounded"
        sx={{ height: "200px", width: "200px", margin: "0 auto", mb: 2 }}
      />
      <Typography variant="h6" color="primary">
        {isSmUp ? (
          <RandomReveal
            isPlaying
            duration={2}
            characterSet={farsiAlphabet}
            characters="محمد کارگر"
          />
        ) : (
          "محمد کارگر"
        )}
      </Typography>
      <Typography variant="caption" color="gray">
        {isSmUp ? (
          <RandomReveal
            isPlaying
            duration={2}
            characters="Frontend Developer"
          />
        ) : (
          "Frontend Developer"
        )}
      </Typography>

      <Box component="div" sx={{ margin: "0 auto", textAlign: "center" }}>
        {social.map((item, idx) => (
          <IconButton key={idx}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <item.icon className="text-gray-500" />
            </a>
          </IconButton>
        ))}
      </Box>
    </>
  );
};

export default SideBarHeader;
