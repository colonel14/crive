import Head from "next/head";
import "../styles/globals.css";
import { Navbar, Footer } from "../components";
import { AnimatePresence } from "framer-motion";
export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Crive</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ico.svg" />
      </Head>
      <Navbar router={router} />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Footer />
    </>
  );
}
