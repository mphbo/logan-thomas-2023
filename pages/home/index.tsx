import Head from "next/head";
import Image from "next/image";
import styles from "./styles/Home.module.scss";
import Button from "./components/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.buttonsContainer}>
          <Button active label="<Home />" />
          <Button label="<Jobs />" />
        </div>
        <div className={styles.buttonsContainer}>
          <Button label="<Projects />" />
          <Button label="<Skills />" />
        </div>
        <div>
          <p className={styles.paragraph}>This is</p>
        </div>
        <div className={styles.headingContainer}>
          <p className={styles.heading}>Logan Thomas</p>
        </div>
      </header>
      <main className={styles.main}></main>
      <footer></footer>
    </>
  );
}