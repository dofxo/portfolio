import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./containers/App.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider } from "react-helmet-async";
import { cacheRTL, theme } from "./templates/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  </StrictMode>,
);
