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
import { pink } from "@mui/material/colors";

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
        minHeight: "100vh",
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
        <Grid container sx={{ mx: 3, mt: 10 }}>
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
                <Card sx={{ maxWidth: 345, backgroundColor: "primary.main" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height={200}
                      width={200}
                      image={item.image}
                      alt={item.title}
                    />
                    <CardContent>
                      <Typography
                        textAlign="left"
                        sx={{ color: pink[900] }}
                        gutterBottom
                        variant="body1"
                      >
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
                  <CardActions className="justify-end">
                    <Button
                      href={item.link}
                      size="small"
                      target="_blank"
                      sx={{ color: pink[100] }}
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
