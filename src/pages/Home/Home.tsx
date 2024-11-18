import { Typography, Box } from "@mui/material";
import TitleAdder from "../../HOC/TitleAdder";
import backgroundImg from "/src/assets/images/image.jpg";
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
          }}
          className="flex flex-col"
        >
          <Typography
            variant="h3"
            color="whitesmoke"
            sx={{ fontSize: { xs: "20px", md: "40px" } }}
          >
            محمد کارگر
          </Typography>
          <Typography
            variant="h4"
            color="#e2e2e2"
            sx={{
              p: 2,
              fontSize: { xs: "17px", md: "30px" },
              textDecoration: "underline",
            }}
          >
            (ReactJs) توسعه دهنده فرانت اند
          </Typography>
        </Box>
      </Box>
    </LazyLoadComponent>
  );
};

export default TitleAdder(Home, "صفحه اصلی");
