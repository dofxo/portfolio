import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import { Typography, Box } from "@mui/material";
import TextTransition, { presets } from "react-text-transition";
import TitleAdder from "../HOC/TitleAdder";

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
        background:
          "linear-gradient(135deg, #ff7e5f, #feb47b, #86a8e7, #91eae4)",
        backgroundSize: "400% 400%",
        animation: "gradientAnimation 15s ease infinite",
        backdropFilter: "blur(10px)",
        zIndex: 1,
        overflow: "hidden",
        position: "relative",
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
          color="primary.main"
          sx={{ p: 2 }}
        />
        <TextTransition springConfig={presets.gentle}>
          <Typography
            variant="h4"
            color="whitesmoke"
            sx={{
              p: 2,
              textDecoration: "underline",
              textDecorationColor: "#7A5DCB",
            }}
          >
            {showText ? "توسعه دهنده فرانت اند (ReactJs)" : ""}
          </Typography>
        </TextTransition>
      </Box>
    </Box>
  );
};

export default TitleAdder(Home, "صفحه اصلی");
