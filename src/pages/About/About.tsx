import { CardContent, Avatar, Box, Chip, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import avatar from "/src/assets/images/MohammadKargar.jpg";
import { experiencesInfo } from "../../constant/data/experiencesInfo";
import CustomDivier from "../../components/general/CustomDivier";
import Skills from "./Skills";
import TitleAdder from "../../HOC/TitleAdder";
import CountUp from "react-countup";
import Wrapper from "../parts/Wrapper";

const About = () => {
  return (
    <Wrapper>
      <CardContent>
        <Grid container sx={{ mx: 3 }}>
          <Grid size={{ xs: 12 }}>
            <CustomDivier
              textAlign="center"
              title="برنامه نویس فرانت اند"
              icon={<CodeRounded />}
              color="primary"
            />

            <Box className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-20">
              <Box className="flex flex-col">
                {experiencesInfo.map((item, idx) => (
                  <Box
                    key={idx}
                    sx={{ width: 1, mb: 2 }}
                    className="flex gap-5 justify-between"
                  >
                    <Chip
                      icon={<item.icon style={{ color: "whitesmoke" }} />}
                      sx={{
                        p: 2,
                        backgroundColor: item.color,
                        width: "120px",
                      }}
                      label={
                        <Typography variant="body1" color="whitesmoke">
                          <CountUp
                            start={0}
                            prefix={item?.prefix ?? ""}
                            end={item.total}
                            duration={3}
                          />
                        </Typography>
                      }
                    />
                    <Typography
                      className="!text-[11px] md:!text-[17px] flex justify-center items-center"
                      sx={{ color: item.color }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Avatar
                variant="rounded"
                src={avatar}
                sx={{
                  height: 250,
                  width: 250,
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container className="mt-[50px]">
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
    </Wrapper>
  );
};

export default TitleAdder(About, "درباره من");
