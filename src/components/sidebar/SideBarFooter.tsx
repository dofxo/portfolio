import { CopyrightRounded, FavoriteRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const SideBarFooter = () => {
  return (
    <Box className="flex flex-grow flex-col gap-2 justify-end items-center !h-[100px]">
      <Typography variant="subtitle2" color="white">
        طراحی شده با{" "}
        <FavoriteRounded className="align-middle !h-[20px] text-red-500" />
      </Typography>
      <Typography variant="caption" color="whitesmoke">
        کپی رایت {new Date().getFullYear()}{" "}
        <CopyrightRounded className="align-middle h-[16px]" />
      </Typography>
    </Box>
  );
};

export default SideBarFooter;
