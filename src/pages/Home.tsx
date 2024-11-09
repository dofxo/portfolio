import { Box, Typography } from "@mui/material";
import image from "../../public/assets/images/image.jpg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

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
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex flex-col h-[100vh] justify-center items-center "
    >
      <Typography
        ref={nameEl}
        variant="h3"
        color="primary.main"
        sx={{ textAlign: "center", p: 2 }}
      ></Typography>
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
      ></Typography>
    </Box>
  );
};

export default Home;
