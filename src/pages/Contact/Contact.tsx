import { Card, CardContent, Slide } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TitleAdder from "../../HOC/TitleAdder";
import CustomDivier from "../../components/general/CustomDivier";
import { AccountCircle } from "@mui/icons-material";
import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import ContactDesciption from "./ContactDesciption";
import worldMapImage from "../../../src/assets/images/worldmap.svg";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Card className="min-h-[100vh] bg-[whitesmoke] flex flex-col">
      <CardContent>
        <CustomDivier
          textAlign="center"
          title="ارتباط با من"
          icon={<AccountCircle />}
          color="warning"
        />
        <Grid container sx={{ mt: 10, p: 4 }}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transition: loading ? "200ms" : "0ms",
            }}
          >
            <Grid size={{ xs: 12, sm: 12, md: 8 }}>
              <Card sx={{ justifyContent: "center", alignItems: "center" }}>
                <ContactForm />
              </Card>
            </Grid>
          </Slide>
          <Slide
            direction="up"
            in={loading}
            style={{
              transition: loading ? "200ms" : "0ms",
            }}
          >
            <Grid
              size={{ xs: 0, sm: 0, md: 4 }}
              sx={{
                textAlign: "center",
                backgroundImage: `url(${worldMapImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <ContactDesciption />
            </Grid>
          </Slide>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TitleAdder(Contact, "ارتباط با من");
