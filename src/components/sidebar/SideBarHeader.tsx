import { Avatar, Typography } from "@mui/material";
import avatarImg from "../../../public/assets/images/dofxo.jpg";

const SideBarHeader = () => {
  return (
    <>
      <Avatar
        src={avatarImg}
        variant="rounded"
        sx={{ height: "200px", width: "200px", margin: "0 auto", mb: 2 }}
      />
      <Typography variant="h6" color="whitesmoke">
        محمد کارگر
      </Typography>
      <Typography variant="caption" color="whitesmoke">
        Frontend Developer
      </Typography>
    </>
  );
};

export default SideBarHeader;
