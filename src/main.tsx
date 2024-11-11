import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import AppContainer from "./containers/AppContainer.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider } from "react-helmet-async";
import { cacheRTL, theme } from "./templates/theme/index.ts";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "./components/general/ErrorBoundaryFallBack.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
      <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <AppContainer />
          </HelmetProvider>
        </ThemeProvider>
      </CacheProvider>
    </ErrorBoundary>
  </StrictMode>,
);
