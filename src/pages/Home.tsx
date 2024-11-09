import image from "../../public/assets/images/image.jpg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import BlurWrapper from "../components/helpers/BlurWarpper";
import { Typography } from "@mui/material";

const Home = () => {
  const nameEl = useRef(null);
  const infoEl = useRef(null);

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["محمد کارگر"],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false,
    });

    const typedInfo = new Typed(infoEl.current, {
      strings: ["توسعه دهنده فرانت اند"],
      startDelay: 1500,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 50,
      showCursor: false,
    });

    return () => {
      typedName.destroy();
      typedInfo.destroy();
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
      <Typography
        ref={infoEl}
        variant="h4"
        color="whitesmoke"
        sx={{
          textAlign: "center",
          p: 2,
          textDecoration: "underline",
          textDecorationColor: "#7A5DCB",
        }}
      />
    </BlurWrapper>
  );
};

export default Home;
