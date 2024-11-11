import { Card, CardContent, Avatar, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import avatar from "../../public/assets/images/MohammadKargar.jpg";
import DevInfo from "./parts/DevInfo";
import { devInfo } from "../components/data/devInfo";
import CustomDivier from "./parts/CustomDivier";
import Skills from "./parts/Skills";
import TitleAdder from "../HOC/TitleAdder";

const About = () => {
  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
        overflow: "hidden",
      }}
    >
      <CardContent>
        <Grid container sx={{ mx: 3 }}>
          <Grid size={{ xs: 12 }}>
            <CustomDivier
              textAlign="center"
              title="برنامه نویس فرانت اند"
              icon={<CodeRounded />}
              color="primary"
            />

            <Box className="flex justify-end items-center md:justify-center gap-20">
              <Box>
                {devInfo.map((item, idx) => (
                  <DevInfo key={idx}>
                    {item.title}: {item.value}
                  </DevInfo>
                ))}
              </Box>
              <Avatar
                variant="rounded"
                src={avatar}
                sx={{
                  height: 250,
                  width: 250,
                  display: {
                    xl: "block",
                    lg: "block",
                    md: "block",
                    sm: "none",
                    xs: "none",
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container className="mt-[50px] md:mt-[100px]">
          <Grid sx={{ width: 1, mt: 1 }}>
            <CustomDivier
              textAlign="center"
              title="مهارت های من"
              icon={<SelfImprovementRounded />}
              color="secondary"
            />
            <Skills />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TitleAdder(About, "درباره من");
