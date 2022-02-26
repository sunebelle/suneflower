// import ErrorMessage from "components/ErrorMessage";
import { THEME } from "../constants/colors";
import responsive from "../constants/responsive";
import storage from "../helpers/localStorage";
import React, { useMemo ,Suspense } from "react";
import { ThemeProvider } from "react-jss";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Loader from "../components/Loader";
import { useTranslation } from 'react-i18next';
import LandingPage from "../containers/_LandingPage";

function App() {
  const tokenLocalStorage = storage.getAccessToken();
    

  // i18n translations might still be loaded by the http backend
// use react's Suspense

  return (
   
      <BrowserRouter>
        {/* <ThemeProvider theme={theme}> */}
        <Suspense fallback={<Loader />}>
            <div style={{
              maxWidth: responsive.MAX_WIDTH_DESKTOP,
              margin: "auto",
              height: "100vh",
            }}
            >
              <LandingPage />
              {/* {tokenLocalStorage ? <AuthRouters /> : <PublicRoutes />} */}
              {/* <ErrorMessage /> */}
            </div>
            </Suspense>
        {/* </ThemeProvider> */}
      </BrowserRouter>
  );
}

export default App;
