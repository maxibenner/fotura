import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Nav } from "../components/nav/Nav";
import { CardStack } from "../components/cardStack/CardStack";

export default function Home() {
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
          <h1>
            We are a curiosity driven <b>product studio</b>
          </h1>
          <a href="mailto:benner@fotura.co">Contact &rarr;</a>
        </div>
        <div>
          <CardStack />
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
