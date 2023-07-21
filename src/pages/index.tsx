import { Inter } from "next/font/google";
import Head from "next/head";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import Partner from "@/components/Partner";
import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Payna Finance</title>
        <meta name="description" content="Payna Finance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar />
        <Hero />
        <Partner />
        <Offer />
      </main>
    </>
  );
}
