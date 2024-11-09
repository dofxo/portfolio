import { Box } from "@mui/material";

const BlurWarpper = ({
  children,
  imageUrl,
}: {
  children: any;
  imageUrl?: string;
}) => {
  return (
    <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "blur(20px)",
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          zIndex: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default BlurWarpper;
