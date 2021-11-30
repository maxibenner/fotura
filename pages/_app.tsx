import "../styles/globals.css";
import type { AppProps } from "next/app";
import { I18nContextWrapper } from "../context/i18n";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <I18nContextWrapper>
      <Component {...pageProps} />
    </I18nContextWrapper>
  );
}
export default MyApp;
