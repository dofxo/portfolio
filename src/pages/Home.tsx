import Typed from "typed.js";
import { useCallback, useEffect, useRef, useState } from "react";
import { Typography, Box } from "@mui/material";
import TextTransition, { presets } from "react-text-transition";
import TitleAdder from "../HOC/TitleAdder";
import Particles from "react-particles";
import backgroundImg from "/src/assets/images/image.jpg";

const Home = () => {
  const [showText, setShowText] = useState(false);
  const nameEl = useRef(null);

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["محمد کارگر"],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false,
    });

    setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => {
      typedName.destroy();
    };
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
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
      >
        <Typography
          ref={nameEl}
          variant="h3"
          color="whitesmoke"
          sx={{ p: 2 }}
        />
        <TextTransition springConfig={presets.gentle}>
          <Typography
            variant="h4"
            color="#e2e2e2"
            sx={{
              p: 2,
              textDecoration: "underline",
            }}
          >
            {showText ? "(ReactJs) توسعه دهنده فرانت اند" : ""}
          </Typography>
        </TextTransition>
      </Box>
    </Box>
  );
};

export default TitleAdder(Home, "صفحه اصلی");
