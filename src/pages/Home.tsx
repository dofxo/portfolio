import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import { Typography, Box } from "@mui/material";
import TextTransition, { presets } from "react-text-transition";
import TitleAdder from "../HOC/TitleAdder";
import backgroundImg from "/src/assets/images/image.jpg";
import useMediaCustomQuery from "../customHooks/useMediaCustomQuery";

const Home = () => {
  const nameEl = useRef(null);
  const [textIndex, setTextIndex] = useState(0);

  const isSmUp = useMediaCustomQuery("sm");

  useEffect(() => {
    if (nameEl.current) {
      const typedName = new Typed(nameEl.current, {
        strings: ["محمد کارگر"],
        typeSpeed: 50,
        backSpeed: 20,
        backDelay: 10,
        showCursor: false,
      });

      // Shows text by increasing the index
      setTimeout(() => setTextIndex(1), 1000);

      // Cleanup function to destroy the Typed instance when the component unmounts
      return () => {
        typedName.destroy();
      };
    }
  }, []);

  return (
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
        {isSmUp ? (
          <Typography
            ref={nameEl}
            variant="h3"
            color="whitesmoke"
            sx={{ p: 2 }}
          />
        ) : (
          <Typography variant="h3" color="whitesmoke" sx={{ fontSize: "30px" }}>
            محمد کارگر
          </Typography>
        )}
        {isSmUp ? (
          <TextTransition springConfig={presets.gentle}>
            <Typography
              variant="h4"
              color="#e2e2e2"
              sx={{
                p: 2,
                textDecoration: "underline",
              }}
            >
              {["", "(ReactJs) توسعه دهنده فرانت اند"][textIndex]}
            </Typography>
          </TextTransition>
        ) : (
          <Typography
            variant="h4"
            color="#e2e2e2"
            sx={{
              p: 2,
              fontSize: "17px",
              textDecoration: "underline",
            }}
          >
            (ReactJs) توسعه دهنده فرانت اند
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default TitleAdder(Home, "صفحه اصلی");
