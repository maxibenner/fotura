import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { LanguageContext } from "../contexts/language";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <LanguageContext.Provider value="en">
      <Component {...pageProps} />
    // </LanguageContext.Provider>
  );
}
export default MyApp;
