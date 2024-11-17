import { Typography } from "@mui/material";
import { WavingHandRounded } from "@mui/icons-material";

const ContactDesciption = () => {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          color: "black",
          mt: 4,
          display: { sm: "none", xs: "none", md: "block" },
        }}
      >
        هر سوال و صحبتی که داری من هستم
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "black",
          mt: 2,
          display: { sm: "none", xs: "none", md: "block" },
        }}
      >
        <a
          href="mailto:kargat504@gmail.com"
          className="text-red-500 flex items-center justify-center gap-1"
        >
          <WavingHandRounded className="text-yellow-500" />
          <Typography variant="subtitle1" color="black">
            من
          </Typography>
          <Typography variant="subtitle1">ایمیل</Typography>
        </a>
      </Typography>
    </>
  );
};

export default ContactDesciption;
