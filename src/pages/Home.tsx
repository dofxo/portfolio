import image from "../../public/assets/images/image.jpg";
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import BlurWrapper from "../components/helpers/BlurWarpper";
import { Typography } from "@mui/material";
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
    <BlurWrapper imageUrl={image}>
      <Typography
        ref={nameEl}
        variant="h3"
        color="primary.main"
        sx={{ textAlign: "center", p: 2 }}
      />
      <TextTransition springConfig={presets.gentle}>
        {showText && (
          <Typography
            variant="h4"
            color="whitesmoke"
            sx={{
              textAlign: "center",
              p: 2,
              textDecoration: "underline",
              textDecorationColor: "#7A5DCB",
            }}
          >
            توسعه دهنده فرانت اند (ReactJs)
          </Typography>
        )}
      </TextTransition>
    </BlurWrapper>
  );
};

export default TitleAdder(Home, "صفحه اصلی");
