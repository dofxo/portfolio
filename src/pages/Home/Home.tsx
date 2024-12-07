import { Typography, Box } from "@mui/material";
import TitleAdder from "../../HOC/TitleAdder";
import backgroundImg from "/src/assets/images/noisy.png";
import reactIcon from "/src/assets/images/reactIcon.png";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const Home = () => {
  return (
    <LazyLoadComponent>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${backgroundImg})`,
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            position: "relative",
          }}
          className="flex flex-col items-start gap-2 mb-[100px]"
        >
          <Typography
            variant="h3"
            color="whitesmoke"
            sx={{ fontSize: { xs: "20px", md: "30px" } }}
            className="responsive-typography-2 ml-2"
          >
            Mohammad Kargar
          </Typography>
          <Typography
            variant="h4"
            color="#e2e2e2"
            className="responsive-typography-1"
          >
            FrontEnd Developer
          </Typography>
          <img src={reactIcon} className="w-[50px] absolute top-0 right-0" />
        </Box>
      </Box>
    </LazyLoadComponent>
  );
};

export default TitleAdder(Home, "صفحه اصلی");
