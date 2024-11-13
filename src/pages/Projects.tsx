import {
  Typography,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  CardMedia,
  Slide,
  Box,
  Button,
} from "@mui/material";
import TitleAdder from "../HOC/TitleAdder";

//@ts-ignore
import EllipsisText from "react-ellipsis-text";
import CustomDivider from "./parts/CustomDivier";
import { useEffect, useState } from "react";
import { CodeRounded } from "@mui/icons-material";
import Grid from "@mui/material/Grid2";
import { projects } from "../components/data/projects";

const Projects = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
      }}
    >
      <CardContent>
        <Slide
          direction="down"
          in={loading}
          style={{
            transitionDelay: loading ? `100ms` : "0ms",
          }}
        >
          <Box>
            <CustomDivider
              textAlign="center"
              title="نمونه کارها"
              icon={<CodeRounded />}
              color="primary"
            />
          </Box>
        </Slide>
        <Grid container sx={{ mx: 3 }}>
          {projects.map((item, idx) => (
            <Grid
              key={idx}
              sx={{ px: 2, mb: 2 }}
              size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
            >
              <Slide
                direction="up"
                in={loading}
                style={{
                  transitionDelay: loading ? `${idx + 3}00ms` : "0ms",
                }}
              >
                <Card sx={{ maxWidth: 345, backgroundColor: "steelblue" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height={200}
                      width={200}
                      image={item.image}
                      alt={item.title}
                    />
                    <CardContent>
                      <Typography textAlign="left" gutterBottom variant="body1">
                        {item.title}
                      </Typography>
                      <Typography
                        textAlign="left"
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                        sx={{ direction: "ltr" }}
                      >
                        <EllipsisText text={item.info} length="100" />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      href={item.link}
                      size="small"
                      color="primary"
                      target="_blank"
                    >
                      نمایش وبسایت
                    </Button>
                  </CardActions>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TitleAdder(Projects, "نمونه کارها");
