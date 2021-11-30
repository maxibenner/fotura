import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Nav } from "../components/nav/Nav";
import { CardStack } from "../components/cardStack/CardStack";
import { useContext } from "react";
import { I18nContext } from "../context/i18n";

export default function Home() {
  const { i18nText } = useContext(I18nContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Fotura</title>
        <meta name="description" content="Curiosity driven product studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <div>
          <h1>{i18nText(1)}</h1>
          <a href="mailto:benner@fotura.co">{i18nText(3)} &rarr;</a>
        </div>
        <div>
          <CardStack />
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
